import React, { useState } from 'react'
import './Carousel.css'
//import CardHotel from '../CardCarousel/CardHotel'
import Flechas from '../Flechas/Flechas'
import PhotoCarousel from '../PhotoCarousel/PhotoCarousel'
import dataHotels from '../../datahotels'
import DataCardHotel from '../DataCardHotel/DataCardHotel'
import dataCities from '../../dataCities'
import { useEffect } from 'react'
export default function Carousel() {
let [numeroACambiar,setNumeroACambiar]= useState(0)

let [id, setId] = useState(0)

useEffect(
   ()=>{   let idInterval =    setInterval(

    () => {
      next()
      console.log('Pasaron 5 segundos')
    },

    5000


  )
  setId(idInterval)
return clearInterval(id)
},[numeroACambiar]
)








let next = () =>{
  
  if(numeroACambiar<dataCities.length-1){
  setNumeroACambiar(++numeroACambiar)
  }else {
  setNumeroACambiar(0)
  }
  clearInterval(id)
}
let prev = () =>{
  
  if(numeroACambiar>0){
  setNumeroACambiar(--numeroACambiar)
  }else {
  setNumeroACambiar(dataCities.length-1)
  }
  clearInterval(id)
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
