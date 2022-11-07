import React from 'react'
import './CompSignIn.css'
import GoogleButton from '../GoogleButton/GoogleButton'
import ImgSignIn from '../ImgSignIn/ImgSignIn'
import FormSignIn from '../FormSignIn/FormSignIn'
import { useState } from 'react'


   
  function CompSignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = () => {
       
            {
            let login = { email, password }
            localStorage.setItem("user", JSON.stringify(login));
            alert("You logged in successfully");
          }

    }

  

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
            <form  id = 'form'action="index" method='get' className='form-signin'>
            <label htmlFor="username">User</label>
                <input type="text" placeholder='Enter User Name' onChange={(e) => setEmail(e.target.value)} id='usernamejs'/>
            
                <label htmlFor="password">Password</label>
    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
            
    <input type="submit" onClick={submit} value='Submit'/>

            <a href="signup"> Don't Have an Account? </a>
            <GoogleButton/>
        </form>
            </div>
        </div>
    </div>
    
  )
}

export { CompSignIn }