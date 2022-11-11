import React from 'react'
import './DataCardHotel.css'

export default function DataCardHotel(props) {
  let {name} = props
  return (
    <div className='DataCardHotel'>
        <h4>{name}</h4>
        
    </div>
  )
}
