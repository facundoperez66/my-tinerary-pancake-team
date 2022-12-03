import React from 'react';
import "./DetailCity.css";
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import axios from "axios"
import {BASE_URL } from "../../api/url"
import CardItinerary from '../../components/CardItinerary/CardItinerary';


export default function DetailsCity() {

    const { id } = useParams()

    const [detailCards, setDetailCards] = useState([])
    const [itinerary, setItinerary] = useState([])

    let [mostrarEventoUno, setMostrarEventoUno] = useState(false)

    useEffect(() => {
        axios.get(`${BASE_URL}/api/cities/${id}`)
            .then(res => setDetailCards(res.data.data))

        axios.get(`${BASE_URL}/api/itineraries?cityId=${id}`)
            .then(res => setItinerary(res.data.data))
        // eslint-disable-next-line
    }, [])

    let mostrarEvento1 = () => {
        setMostrarEventoUno(!mostrarEventoUno)
    }

    if (detailCards.length !== 0) {
        
        let ciudades = [
            'Egipto',
            'Amsterdam',
            'Madrid',
            'Roma',
            'Berlin',
            'New York',
            'Paris',
            'Dubai',
            'Barcelona',
            'Viena',
            'Milan',
            'Londres',
            'Munich',
        ]
        
      return (
        <>
            <div className='CONTENEDOR-PADRE'>
            <div className="">
              <div className='ParteSuperiorDetails123'>
                        <div className="img-detail">
                            {ciudades.includes(detailCards.name) ? (
                                <img className='' src={detailCards.photo} alt={detailCards.name} />
                            ) : (
                                console.log(true)
                            )}

</div>
                        <div className="ParteSuperior2Details123">
                            
                            <div className="ContenidoDeParteSup123">
                                <h1>City: {detailCards.name}</h1>
                                <p>Continent: {detailCards.continent}</p>
                                <p>Population: {detailCards.population}</p>
                            </div>
</div>
</div>
<div className='NuevaCajaDetails1234'>
                            
                            {itinerary.length !== 0 && (
                                <div className='pruebaDeBotonMore12324'>
                                    <button onClick={mostrarEvento1} className="">


                                    <p>Itineraries</p>
                                    </button>
                                </div>)}
                               </div> 
                        </div>
                    
                    {mostrarEventoUno && (
                       itinerary?.length > 0 &&
                       itinerary?.map(i => {
                       return <CardItinerary key={i._id} itinerary={i} />
                   })
                   )}
               </div>
           </>
       )
   }
}



    

    

    




   