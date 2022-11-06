import React from 'react'
import './CompSignIn.css'

export default function CompSignIn() {
  return (
    <div className='signin-container'>
        <div className='card-sign'>
        <div className='bg-mountain'>
            <div className='img-sign'>
                <img src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" alt="" />
            </div>
            <div>
                <h2>Welcome Back!</h2>
            </div>
        </div>
        <div >
        <form action="" className='form-signin'>
            <label htmlFor="username">User</label>
                <input type="text" placeholder='Enter User Name' />
            
            <label htmlFor="password">Password</label>
                <input type="password" placeholder='Enter Password' />
            
            <input type="submit" value='Log In'/>

            <a href="a"> Don't Have an Account? </a>
        
        </form>
        </div>
        </div>
    </div>
    
  )
}
