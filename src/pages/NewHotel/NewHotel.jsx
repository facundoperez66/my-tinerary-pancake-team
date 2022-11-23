import './NewHotel.css'
import React, { useRef , useEffect} from 'react';
import hotelActions from '../../redux/actions/hotelActions';
import Swal from 'sweetalert2';
import actionsCity from '../../redux/actions/cityActions';
import {useDispatch , useSelector } from 'react-redux';
import Inputs from '../../components/inputs/Inputs';
import BotonEnviar from '../../components/BotonEnviar/BotonEnviar';

function NewHotel() {

    const dispatch = useDispatch()
    const {cities} = useSelector(state => state.city)
    const {createHotel} = hotelActions
    const {getCities} = actionsCity
    

    const form = useRef()
    const name = useRef()
    const photo1 = useRef()
    const photo2 = useRef()
    const photo3 = useRef()
    const capacity = useRef()
    const cityId = useRef()
    
    useEffect(()=>{
        dispatch(getCities())

    },[])
    async function sendForm (event){
        event.preventDefault()
        let newHotel = {
            name: name.current.value,
            photo: [photo1.current.value, photo2.current.value, photo3.current.value],
            capacity: capacity.current.value,
            cityId: cityId.current.value,
            userId: '636fe5cd55d86e11bfaebc4a',
        }
        try{
            let res = await dispatch(createHotel(newHotel))
            if(res.payload.success){
                Swal.fire({
                    icon:'success',
                    tittle: 'hotel created successfully',
                    showConfirmButton: true,
                })
                .then(result => {
                    if(result.isConfirmed){
                        window.location.href= `/detailsH/${res.payload.id}`
                    }
                })
                form.current.reset()
            }else{
                Swal.fire({
                    icon:'error',
                    tittle: 'error',
                    html: res.payload.messages.join('<Br>')
                })
            }
        }catch(error){
            console.log(error);

        }
    }
    
    return (
        <>
        <div className='CONTENEDORPADRE2'>
          <div className='ParteSuperiorNew'>
                    <h2> New Hotel</h2>
                  </div>
            <form className="form-newCity">
                <div className="form-body">
                  
                    
                    <h2 className='title2'>Create new Hotel!</h2>
                    <Inputs
                        refId= {name}
                        type="text"
                        placeholder="Name of hotel"
                        className='form__input'
                        
                       
                    />
                    <Inputs
                        refId= {capacity}
                        type="text"
                        placeholder="Capacity"
                        className='form__input'
                       
                        
                    />
                    <Inputs
                        refId= {photo1}
                        type="text"
                        placeholder="Photo (URL)"
                        className='form__input'
                        
                    />
                    <Inputs
                        refId= {photo2}
                        type="text"
                        placeholder="Photo (URL)"
                        className='form__input'
                        
                    />
                    <Inputs
                        refId= {photo3}
                        type="text"
                        placeholder="Photo (URL)"
                        className='form__input'
                        
                    />
                   
                    <div className="submit12">
                        <BotonEnviar fx={sendForm} className='submit2' >Create</BotonEnviar>
                    </div>
                </div>
            </form>
            </div>
        </>
    );
};
export { NewHotel }