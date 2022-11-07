import React from 'react'
import './CompSignIn.css'
import ImgSignIn from '../ImgSignIn/ImgSignIn'
import FormSignIn from '../FormSignIn/FormSignIn'

export default function CompSignIn() {
   
  
    
   
    console.log(localStorage);
  return (
    
    <div className='signin-container'>
        <div className='card-sign'>
            <div className='bg-mountain'>
                <ImgSignIn/>
            <div>
                <h2>Welcome Back!</h2>
            </div>
            </div>
            <div >
                <FormSignIn/>
            </div>
        </div>
    </div>
    
  )
}
