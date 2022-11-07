import React from 'react'
import FormUserName from '../FormUserName/FormUserName'
import FormPassword from '../FormPassword/FormPassword'
import FormSubmit from '../FormSubmit/FormSubmit'
import FormName from '../FormName/FormName'
import FormSurname from '../FormSurname/FormSurname'
import FormMail from '../FormMail/FormMail'
import FormTel from '../FormTel/FormTel'

export default function FormSignUp() {
  return (
    <div className='form-signin'>
    <form action="">
        <FormName/>

        <FormSurname/>

        <FormMail/>
        
        <FormTel/>
        
        <FormUserName/>

        <FormPassword/>

        <FormSubmit/>

    </form>
</div>
  )
}
