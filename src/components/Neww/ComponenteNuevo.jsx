import React from 'react'
import './ComponenteNuevo.css'
export const Detail = ({name, photo, continent, population}) => {
  return (
    <div className='Contenedor1'>
      <div className='ContenedorSuperior'>
        <div className='DetailsContenedor'><h2>DETAILS</h2></div>
      <div className='FotoCity'>
        <img className='detail-img' src={photo} alt={name} />
        </div>
        <div className='ContenedorPalabras'>
        <p>Name: {name}</p>
        <p>Continent: {continent}</p>
        <p>Population: {population}</p>
</div>
</div>
<div className='mytirenary'> <h2>MY ITINERARY</h2></div>
<div className='ContenedorInferior'>



</div>

    </div>
  )
}