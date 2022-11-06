import './Hotels.css'
import Filtro1 from '../Filtro 1/Filtro1'
import Filtro2 from '../Filtro 2/Filtro2'
import CardHotel from '../CardHotel/CardHotel'
import dataHotels from '../../dataHotels'
import { useState, useEffect, useCallback } from 'react';
export default function ComponentesHotels() {
    const [query, setQuery] = useState('');
    console.log(query)
    
    
   
    return (

        <>
            <div className='CitiesMod'>
                <div className='ContenedorDeFiltros' >
                    <h2>HOTELS</h2>
                    <div className='FiltrosDis'  >
                        <div className='contenedor-checkbox'>
                            <div className="Filtro1-select">
                                <select name="select">
                                    <option value="value1" >More expensive</option>
                                    <option value="value2"  >Cheaper</option>
                                    
                                </select>
                            </div>
                        </div>

                        <div className='Searchbar-filtro2'>
                            <input onChange={(e) => setQuery(e.target.value)} type="search" id="site-search" name="Search" placeholder='Hotel...'>
                            </input>



                        </div>
                    </div>
                </div>
                <div className='ContenedorCards'>


                {dataHotels.filter((user)=>user.name.toLowerCase().includes(query)).map((cadaPerfil,id)=><CardHotel key={cadaPerfil.id} datos={cadaPerfil}/>)}

                </div>

            </div>

        </>

    )
}