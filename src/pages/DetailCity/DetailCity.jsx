import React from 'react'
import "./DetailCity.css"
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import Events from "../../components/Itinerary/Itinerary"

export default function DetailsCity() {

    const { id } = useParams()

    const [detailCards, setDetailCards] = useState([])
    const [tourism, setTourism] = useState([])

    let [mostrarEventoUno, setMostrarEventoUno] = useState(false)
    let [mostrarEventoDos, setMostrarEventoDos] = useState(false)

    useEffect(() => {
        fetch('../dataCities.json')
            .then(response => response.json())
            .then(response => setDetailCards(response))

        fetch('../dataEvents.json')
            .then(response => response.json())
            .then(response => setTourism(response))
    }, [])

    function numeroRandom(numero) {
        return Math.floor(Math.random() * numero)
    }

    let ciudadFilt = detailCards.filter((ciudad) => ciudad.id === id)[0]

    

    

    if (ciudadFilt) {
        return (
            <div className='CONTENEDOR-PADRE'>
              <div className='contenedor-details'>
                <h2>DETAILS</h2>
              </div>
                <div className="detail-cities">
                    <div className="img-detail">
                        <img className="" src={ciudadFilt.photo} alt={ciudadFilt.name} />
                    </div>
                    <div className="text-detail">
                        <div className="logo-details">
                            <img className="img-w-5" src="./img/building1.png" alt="" />
                        </div>
                        <div>
                          <div>
                            <h1>{ciudadFilt.name}</h1>
</div>
<div>
                            <p>{ciudadFilt.continent}</p>
</div>
<div>
                            <p>{ciudadFilt.population}</p>
</div>
                        </div>
                        
                        
                    </div>
                </div>
                
                
                <div className='parteInferior'>
                  <h2>EVENTS</h2>
                </div>
                <div className='cajadeEeventos'>
                <Events className="p-2" id={ciudadFilt.id}></Events>
                  
                </div>

                <div className='botoncito12321'>
                  <button>
                    <p>Coment</p>
                  </button>
                </div>
            </div>

        
        )
    }

}