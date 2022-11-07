import './DetailCity.css'
import { useParams } from 'react-router-dom'
import dataCities from '../../dataCities'
import DetailsSuperior from '../DetailsSuperior/DetailsSuperior'
import TituloCard from '../TituloCard/TituloCard'
import CardDetails from '../CardDetails1/CardDetails'
import FotoDetails from '../FotoDetails/FotoDetails'
import DatosDetailCity from '../DatosDetailCity/DatosDetailCity'
import ContinentDetailCity from '../ContinentDetailCity/ContinentDetailCity'
import PopulationDetailCity from '../PopulationDetailCity/PopulationDetailCity'
import { useState, useEffect, useCallback } from 'react';

export default function DetailCityComponent(){  
    

const {id} = useParams


return(
<>
    <div className='DetailCityContainer'>
       
        <div className='PartSuperior'>
            <div className='ContenidoSuperior'>
                <div className='fotoDetails'>
               <FotoDetails foto={dataCities.photo}/>

</div>
<div className='TextoSuperior'>
    <DatosDetailCity  Campo='Name '  dato={dataCities.name}  />
<ContinentDetailCity Campo='Continent '  dato={dataCities.continent} />
<PopulationDetailCity Campo='Population ' dato={dataCities.population} />
    
</div>
            </div>
           
        
        
        </div>
        <div className='MyTitulo'>
   <h2>ITINERARY</h2>     
</div>
<div className='ParteIntermedia'>
<div className='ParteIzq'>
<h2>SOY LA PARTE INTERMEDIA IZQ TEXTO</h2>
</div>
<div className='ParteDer'>
<h2>SOY LA PARTE INTERMEDIA DER IMAGEN</h2>

</div>
</div>
    </div>


</>
)

}