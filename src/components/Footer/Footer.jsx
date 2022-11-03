import React from 'react'
import LinkSocialNet from '../LinkSocialNet/LinkSocialNet'
import LinkCitiesHotels from '../LinkCitiesHotels/LinkCitiesHotels'
import ButtonToTop from '../ButtonToTop/ButtonToTop'
import './Footer.css'
export default function footer() {
  return (
    <>
    <div className='FooterContainer'>
        <LinkSocialNet/>
        <LinkCitiesHotels/>
        <ButtonToTop/>
    </div>
    </>
  )
}
