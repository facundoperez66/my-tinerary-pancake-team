import './Filtro2.css'
import dataCities from '../../dataCities'
import { useState } from 'react'
import CardCity from '../CardCity/CardCity'

export default function Filtro2() {
    const [search, setSearch] = useState('')
    console.log(search)
    
    return (

        <>
<div className='Searchbar-filtro2'>
<input onChange={(e) => setSearch(e.target.value)} type="search" id="site-search" name="Search" placeholder='City...'>
</input>



</div>
       </>
    )
    
    
    }