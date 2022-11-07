import React from 'react'
import FormPhoto from '../FormPhoto/FormPhoto'
import FormSubmit from '../FormSubmit/FormSubmit'
import FormNameHotel from '../FormNameHotel/FormNameHotel'
import FormCapacity from '../FormCapacity/FormCapacity'

export default function FormNewHotel() {
  return (
    <div className='form-signin'>
        <form action="">
            <FormNameHotel/>
            <FormPhoto/>
            <FormPhoto/>
            <FormPhoto/>
            <FormCapacity/>
            <FormSubmit/>
        </form> 
    </div>
  )
}
