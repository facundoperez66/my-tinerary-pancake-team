import React from 'react'
import FormSubmit from '../FormSubmit/FormSubmit'
import FormNameCity from '../FormNameCity/FormNameCity'
import FormContinent from '../FormContinent/FormContinent'
import FormPhoto from '../FormPhoto/FormPhoto'
import FormPopulation from '../FormPopulation/FormPopulation'

export default function FormNewCity() {
  return (
    <div className='form-signin'>
                <form action="">
                    <FormNameCity/>

                    <FormContinent/>

                    <FormPhoto/>

                    <FormPopulation/>

                    <FormSubmit/>
                </form>
    </div>
  )
}
