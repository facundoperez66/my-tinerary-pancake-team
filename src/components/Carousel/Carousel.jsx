import React, { useState } from 'react'
import './Carousel.css'
//import CardHotel from '../CardCarousel/CardHotel'
import Flechas from '../Flechas/Flechas'
import PhotoCarousel from '../PhotoCarousel/PhotoCarousel'
import dataHotels from '../../dataHotels'
import DataCardHotel from '../DataCardHotel/DataCardHotel'
import dataCities from '../../dataCities'
export default function Carousel() {
let [numeroACambiar,setNumeroACambiar]= useState(0)

let next = () =>{
  
  if(numeroACambiar<dataCities.length-1){
  setNumeroACambiar(++numeroACambiar)
  }else {
  setNumeroACambiar(0)
  }
}
let prev = () =>{
  
  if(numeroACambiar>0){
  setNumeroACambiar(--numeroACambiar)
  }else {
  setNumeroACambiar(dataCities.length-1)
  }
}
  return (
    <div className='Carousel'>
      <div className='FlechaCarousel'>
        <Flechas direction="https://cdn-icons-png.flaticon.com/512/2087/2087652.png"onClick={prev}></Flechas>
      </div>
    <div className='ContaineCaouselGral'>
      <div className='CardConteinerC1'>
        <div className='CardHotelContainer'>
        <PhotoCarousel image={dataCities[numeroACambiar].photo}></PhotoCarousel>
        
        <DataCardHotel name={dataCities[numeroACambiar].name}></DataCardHotel>
        </div>
      </div>
      <div className='CardConteinerC2'>
        
        <div className='CardHotelContainer'>
        <PhotoCarousel image={dataHotels[numeroACambiar].photo[2]}></PhotoCarousel>
        
        
        </div>
        <div className='CardHotelContainer'>
        <PhotoCarousel image={dataHotels[numeroACambiar].photo[0]}></PhotoCarousel>
        
        <DataCardHotel name={dataHotels[numeroACambiar].name}></DataCardHotel>
        </div>
        <div className='CardHotelContainer'>
        <PhotoCarousel image={dataHotels[numeroACambiar].photo[1]}></PhotoCarousel>
        
        
        </div>
        
      </div>
    </div>
      <div className='FlechaCarousel'>
      <Flechas direction="https://cdn-icons-png.flaticon.com/512/2026/2026539.png" onClick={next}></Flechas>
      </div>
    </div>
  )
}
