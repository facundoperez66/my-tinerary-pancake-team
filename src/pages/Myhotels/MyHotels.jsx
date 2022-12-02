import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import hotelActions from '../../redux/actions/hotelActions'
import HotelCardAdmin from '../../components/hotelCardAdmin/HotelCardAdmin'
import "./MyHotels.css"

import CompNuevasCards from '../../components/CompNuevasCards/CompNuevasCards'

export default function MyHotels() {

    const dispatch = useDispatch()
    const { hotelsAdmin } = useSelector(state => state.hotel)
    const { getHotelsAdmin } = hotelActions
    const { id } = useSelector(state => state.user)

    useEffect(() => {
        dispatch(getHotelsAdmin(id))
        // eslint-disable-next-line
    }, [])

    return (
        <div className="cities-container">
            

            <div className="cards-container">
                <div className='ParteParaSepararSupDeInf'>
                <CompNuevasCards text='hotel' reDirect='/NewHotel' />
                </div>
                {hotelsAdmin.length > 0 && (
                    hotelsAdmin.map((hotel, index) => {
                        return <HotelCardAdmin hotel={hotel} key={index} idAdm={id} />
                    }))}
            </div>
        </div>
    )
}