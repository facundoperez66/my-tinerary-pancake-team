import './Newcity.css'
import React, {  useRef } from 'react';
import BotonEnviarForm from '../../components/BotonEnviar/BotonEnviar';
import { useDispatch, useSelector } from "react-redux"
import Inputs from '../../components/inputs/Inputs';
import actionsCity from '../../redux/actions/cityActions';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'

export default function NewCity() {

    const dispatch = useDispatch()
    const { createCity} = actionsCity
    const { id, token } = useSelector(state => state.user)
    const navigate = useNavigate()

    const form = useRef()
    const name = useRef()
    const continent = useRef()
    const photo = useRef()
    const population = useRef()

    async function enviarFormulario(event) {
        event.preventDefault()

        let datos = {
            token,
            city:{
                name: name.current.value,
                continent: continent.current.value,
                photo: photo.current.value,
                population: population.current.value,
                userId: id,
            }
        }

        try {
            let res = await dispatch(createCity(datos))
            if (res.payload.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'City created successfully.',
                    showConfirmButton: true,
                })
                .then(result => {
                    if(result.isConfirmed){
                        navigate(`/detailsC/${res.payload.id}`)
                    }
                })  
                form.current.reset()    
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    html: res.payload.messages.join(' <br> '),
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main className="form-newCity">
            
            <div className="flex justify-center">
                <form ref={form}>
                    <div className="cardForm12312321312">
                        <h1 className="text-palette2 titleForm">New City</h1>
                        <div className='CartaNewCityes123'>
                            
                            <div className='CartaNewCityes123'>
                                <div className="CartaNewCityes123">
                                    <Inputs classN="signup-input" type="text" place="Name" id="name" refId={name} />
                                    <Inputs classN="signup-input" type="text" place="Continent" id="continent" refId={continent} />
                                    <Inputs classN="signup-input" type="text" place='Url Photo' id="photo" refId={photo} />
                                    <Inputs classN="signup-input" type="number" place="Population" id="population" refId={population} />
                                </div>
                                <BotonEnviarForm fx={enviarFormulario} texto='Create City' />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}