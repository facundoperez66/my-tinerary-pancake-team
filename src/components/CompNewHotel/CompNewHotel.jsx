import React from 'react'
import FormNewHotel from '../FormNewHotel/FormNewHotel'
import './CompNewHotel.css'

export default function CompNewHotel() {
  return (
    <div className='newhotel-container'>
        <div className='card-newhotel'>
            <h3 className='titlenew'>Create New Hotel</h3>
            <FormNewHotel/>
        </div>
    </div>
  )
}
