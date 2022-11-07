import React from 'react'
import FormNewCity from '../FormNewCity/FormNewCity'
import './CompNewCity.css'

export default function CompNewCity() {
  return (
    <div className='newcity-container'>
        <div className='card-newcity'>
            <h3 className='titlenew'>Create New City</h3>
        
            <FormNewCity/>
            
        </div>
    </div>
  )
}
