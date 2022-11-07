import React from 'react'
import FormUserName from '../FormUserName/FormUserName'
import FormPassword from '../FormPassword/FormPassword'
import FormSubmit from '../FormSubmit/FormSubmit'


export default function FormSignIn() {
 
    
    
  return (
    
    <form  id = 'form'action="index" method='get' className='form-signin'>
            <FormUserName/>
            
            <FormPassword/>
            
            <FormSubmit  />

            <a href="signup"> Don't Have an Account? </a>
        
        </form>
  )
}
