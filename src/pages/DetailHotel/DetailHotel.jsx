import React from 'react'
import "./DetailHotel.css"
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../api/url';

import CardHotel from '../../components/CardHotels/CardHotels';

export default function DetailsHotels() {
    const { id } = useParams()

    const [detailCards, setDetailCards] = useState([])
    const [events, setEvents] = useState([])

    let [mostrarEventoUno, setMostrarEventoUno] = useState(false)

    useEffect(() => {
        axios.get(`${BASE_URL}/api/hotels/${id}`)
            .then(res => setDetailCards(res.data.data))

        axios.get(`${BASE_URL}/api/shows?hotelId=${id}`)
            .then(res => setEvents(res.data.data))
        // eslint-disable-next-line
    }, [])



    let mostrarEvento1 = () => {
        setMostrarEventoUno(!mostrarEventoUno)
    }

    if (detailCards.length !== 0) {
        return (
            <div className='HotelContenedorDetalles123'>
                <div className="">
                    <div className='ParteSuperiorHotelesDetalles1234'>
                        <div className="ParteSuperiorDetails123">
                            <img className="" src={detailCards.photo} alt={detailCards.name} />
                        </div>
                        <div className="">

                            <div className="">
                                <h1>Hotel: {detailCards.name}</h1>
                                <p>Capacity: {detailCards.capacity}</p>
                            </div>
                        </div>
                    </div>
                    <div className='BotonesDeCardHotelsDetails123'>
                        
                        {events.length !== 0 && (
                            <div className=''>
                                <button onClick={mostrarEvento1} className="">
                                    <p>Shows</p>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div className='ShowsSeparacion1234'>
                    {mostrarEventoUno && (
                        events?.length > 0 &&
                        events?.map(i => {
                            return <CardHotel key-={i._id} event={i} />
                        })
                    )}
                </div>
            </div>

        )
    }

}