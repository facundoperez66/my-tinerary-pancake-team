import './Cities.css'
import CardCity from '../CardCity/CardCity'
import dataCities from '../../dataCities'
import { useState, useEffect, useCallback } from 'react';
export default function ComponentesCities() {
   const [query, setQuery] = useState('');
console.log(query)


    return (

<>
<div className='CitiesMod'>
    <div className='ContenedorDeFiltros' >
    <h2>CITIES</h2>
        <div  className='FiltrosDis'  >
        <div className='contenedor-checkbox'>
        <div className="Filtro1-checkbox">
          <input  type="checkbox"  id="ch1"  value="America" />America
        </div>
        <div className="Filtro1-checkbox">
          <input type="checkbox" id="ch2"  value="Europe"  />Europe
        </div>
     </div>
     
     <div className='Searchbar-filtro2'>
<input onChange={(e) => setQuery(e.target.value)} type="search" id="site-search" name="Search" placeholder='City...'>
</input>



</div>
</div>
</div>

<div className='ContenedorCards'>
    
    
{dataCities.filter((user)=>user.name.toLowerCase().includes(query)).map((cadaPerfil,id)=><CardCity key={cadaPerfil.id} datos={cadaPerfil}/>)}

</div>

</div>

</>

    )





    }