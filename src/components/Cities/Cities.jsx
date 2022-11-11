import './Cities.css'
import CardCity from '../CardCity/CardCity'
import dataCities from '../../dataCities'
import { useState, useEffect, useCallback } from 'react';


export default function ComponentesCities() {

  let [ciudades, setCiudades] = useState([])

useEffect(()=> {
  fetch('./dataCities.json')
.then(res=>res.json())

.then(res=> setCiudades(res))
},[])
console.log(ciudades)

let [checked, setChecked] = useState([])

  
   const [query, setQuery] = useState('');
console.log(query)


let checkHandler = (e) => {
  let auxArray = [...checked]
  if(e.target.checked){
      auxArray.push(e.target.value)
  }else{
      auxArray = auxArray.filter(a => a !== e.target.value)
  }
  setChecked(auxArray)
  console.log(auxArray);
}


    return (

<>
<div className='CitiesMod'>
  
    <div className='ContenedorDeFiltros' >
      <div className='tilte-cities'>
      <h2>CITIES</h2>
      </div>
        <div  className='FiltrosDis'  >
          <div className='contenedor-checkbox'>
            <div className="Filtro1-checkbox">
              <input  type="checkbox" onClick={checkHandler} id="ch1"  value="America" />America
            </div>
        
            <div className="Filtro1-checkbox">
              <input type="checkbox" onClick={checkHandler} id="ch2"  value="Europe"  />Europe
            </div>
            <div className="Filtro1-checkbox">
              <input type="checkbox" onClick={checkHandler} id="ch2"  value="Asia"  />Asia
            </div>
          </div>
     
          <div className='Searchbar-filtro2'>
            <input onChange={(e) => setQuery(e.target.value)} type="search" id="site-search" name="Search" placeholder='City...'>
            </input>



          </div>
      </div>
    </div>

<div className='ContenedorCards'>
    
    
    
{ciudades.filter((user)=>user.name.toLowerCase().includes(query)).map((cadaPerfil,id)=><CardCity key={id} datos={cadaPerfil}/>)}



</div>

</div>

</>

    )





    }