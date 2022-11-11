import React from 'react'
import dataCities from '../../dataCities'
import {Link as LinkRouter} from 'react-router-dom'

export default function ButtonMore () {
  return (

    <>

    {( everyCity =>
        <LinkRouter to={`/cities/${everyCity.id}`} key={everyCity.id}>

    <div>
<button>  More     </button>


    </div>


</LinkRouter>
                    )}
  
</>
  )
}
