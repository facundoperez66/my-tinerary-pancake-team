import React from 'react'
import './BackHomeButton.css'
import { Link as LinkRouter } from 'react-router-dom'
export default function BackHomeButton() {
  return (

    <div >
        <LinkRouter to={'/index'}>
        <button className='back-home'>
            <h4>Back to Home</h4>
        </button>
        </LinkRouter>

    </div>
  )
}
