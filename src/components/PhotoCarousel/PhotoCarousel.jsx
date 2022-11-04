import React from 'react'
import './PhotoCarousel.css'


export default function PhotoCarousel(props) {
  let{image}= props
  return (
    <div className='ImgContainer'>
        <img src={image} alt="imag" />
    </div>
  )
}
