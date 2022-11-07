import React from 'react'
import './CompSignUp.css'
import FormSignUp from '../FomSignUp/FormSignUp'
import GoogleButton from '../GoogleButton/GoogleButton'

export default function CompSignUp() {
  return (
    <div className='signup-container'>
        <div className='card-signup'>
        <h3>Sign Up!</h3>
        <GoogleButton/>

        <FormSignUp/>
       
        </div>
    </div>
  )
}
