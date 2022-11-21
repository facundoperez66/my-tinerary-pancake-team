import React from 'react';
import './DetailHotel.css'
import CardHotelFinal from '../../components/CardHotelFinal/CardHotelFinal';

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from 'axios';

export default function DetailHotel () {

    
    

    const { id } = useParams()
    const [detailCards, setDetailCards] = useState([])
    const [show, setShow] = useState([])
    

    useEffect(() => {
      axios.get(`http://localhost:8080/api/hotels/${id}`)
      .then(res => setDetailCards(res.data.data))

      console.log(detailCards);

      axios.get(`http://localhost:8080/api/shows?hotelId=${id}`)
      .then(res => setShow(res.data.response))
    }, []);

   

  

  if (detailCards) {
    return (
        <div className='CONTENEDOR-PADRE'>
          <div className='contenedor-details'>
            <h2>DETAILS</h2>
          </div>
            <div className="detail-cities">
                <div className="img-detail">

                    <img className="" src={detailCards.photo[0]} alt= {detailCards.name} />
                </div>
                <div className="text-detail">
                    <div className="logo-details">
                        <img className="img-w-5" src="./img/building1.png" alt="" />
                    </div>
                    <div>
                      <div>
                        <h1>HOTEL: {detailCards.name}</h1>
</div>
<div>
                        <p>CAPACITY: {detailCards.capacity}</p>
</div>

                    </div>


                </div>
            </div>
            
            <div className='parteInferior'>
                  <h2>EVENTS</h2>
                </div>
                <div className='cajadeEeventos'>

          {
       (show.length!=0)?show.map(e=> <CardHotelFinal key={e?._id} name={e?.name} photo={e?.photo} description={e?.description} price={e?.price} date={e?.date} />):console.log(true)
          }

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