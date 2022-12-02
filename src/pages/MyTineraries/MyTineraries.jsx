import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./MyTineraries.css"
import actionsCity from '../../redux/actions/cityActions'
import ItineraryCardAdmin from '../../components/ItineraryCardAdmin/ItineraryCardAdmin'
import CompNuevasCards from '../../components/CompNuevasCards/CompNuevasCards'



export default function MyItineraries() {
    const dispatch = useDispatch()
    const { itineraries} = useSelector(state => state.city)
    const { id} = useSelector(state => state.user)
    const { getItineraries} = actionsCity

    useEffect(() => {
        dispatch(getItineraries(id))
        // eslint-disable-next-line
    }, [])

    return (
        <div className="cities-container flex m-t-16">
            <img className='imgFondo' src='../img/fondo.jpg' alt='fondo-img' />
            <div className="cards-container container-fluid w-90 flex wrap gap-2 justify-center align-center">
                <CompNuevasCards text='itinerary' reDirect='/newitinerary' />
                {itineraries.length > 0 && (
                    itineraries.map((itinerary, index) => {
                        return <ItineraryCardAdmin itineraries={itinerary} key={index} idAdm={id} />
                    }))
                }
            </div>
        </div>
    )
}