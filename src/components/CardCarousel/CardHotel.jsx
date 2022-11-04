import React from 'react'
import PhotoCarousel from '../PhotoCarousel/PhotoCarousel'
import DataCardHotel from '../DataCardHotel/DataCardHotel'
import './CardHotel.css'
import dataHotels from '../../dataHotels'

export default function CardHotel() {

  return (
    <div className='CardHotelContainer'>
        <PhotoCarousel image={dataHotels[0].photo[0]}></PhotoCarousel>
        
        <DataCardHotel name={dataHotels[0].name}></DataCardHotel>
    </div>
  )
}
