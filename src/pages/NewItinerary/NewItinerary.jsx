import { useRef } from 'react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actionsCity from '../../redux/actions/cityActions'
import Swal from 'sweetalert2'
import Inputs from '../../components/inputs/Inputs'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import BotonEnviar from "../../components/BotonEnviar/BotonEnviar"
import "./NewItinerary.css"

export default function NewItinerary() {

    const dispatch = useDispatch()
    const { createItinerary, getAllCities } = actionsCity
    const { cities } = useSelector(state => state.city)
    const { token, id } = useSelector(state => state.user)
    const navigate = useNavigate()

    const form = useRef()
    const name = useRef()
    const photo1 = useRef()
    const photo2 = useRef()
    const photo3 = useRef()
    const description = useRef()
    const duration = useRef()
    const price = useRef()
    const cityId = useRef()

    useEffect(() => {
        dispatch(getAllCities())
        // eslint-disable-next-line
    }, [])



    async function enviarForm(e) {
        e.preventDefault()
        let datos = {
            token,
            itinerary: {
                name: name.current.value,
                photo: [photo1.current.value, photo2.current.value, photo3.current.value],
                description: description.current.value,
                duration: duration.current.value,
                price: price.current.value,
                cityId: cityId.current.value,
                userId: id
            }
        }
        try {
            let res = await dispatch(createItinerary(datos))
            console.log(res)
            if (res.payload.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Itinerary successfully created',
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'See my itineraries',
                    cancelButtonText: 'Exit'
                })
                    .then(result => {
                        if (result.isConfirmed) {
                            navigate(`/MyTineraries`)
                        }
                    })
                form.current.reset()
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    html: res.payload.response.message.join(' <br> '),
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main className="NewItinerary123">
            
            <div className="">
                <form ref={form}>
                    <div className="">
                        <h1 className="">New Itinerary</h1>
                        <div className=''>
                            
                            <div className='cartaNewItinerary'>
                                <div className="cartasNiTINERARY123">
                                    <Inputs  type="text" place="Name" id="name" refId={name} />
                                    <Inputs  type="text" place='Url Photo 1' id="Photo1" refId={photo1} />
                                    <Inputs  type="text" place='Url Photo 2' id="Photo2" refId={photo2} />
                                    <Inputs  type="text" place='Url Photo 3' id="Photo3" refId={photo3} />
                                    <Inputs  type="text" place="Description" id="description" refId={description} />
                                    <Inputs  type="number" place="Price" id="price" refId={price} />
                                    <Inputs  type="number" place="Duration" id="duration" refId={duration} />
                                    <label className='' htmlFor='cityId'>Select a city :</label>
                                    <select ref={cityId} className="" id="cityId">
                                        {cities.map(city => <option key={city._id} value={city._id}>{city.name}</option>)}
                                    </select>
                                </div>
                                <BotonEnviar fx={enviarForm} texto='Create City' />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}