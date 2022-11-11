import React from 'react'
import './CitiesHotels.css'
import {Link as LinkRouter} from 'react-router-dom'
export default function LinkCitiesHotels() {
  return (
    <div className='ButtonContainer'>
      <LinkRouter to={'/Cities'}>
        <button className='ButtonC'>
            Cities
        </button>
        </LinkRouter>
        <LinkRouter to={'/Hotels'}>
        <button className='ButtonC'>
            Hotels
        </button> </LinkRouter>
        <LinkRouter to={'/NewCity'}>
        <button className='ButtonC'>
            NewCity
        </button> </LinkRouter>
        <LinkRouter to={'/NewHotel'}>
        <button className='ButtonC'>
            NewHotel
        </button> </LinkRouter>
        <LinkRouter to={'/index'}>
        <button className='ButtonC'>
            Home
        </button> </LinkRouter>
    </div>
  )
}
