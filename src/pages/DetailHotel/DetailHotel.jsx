import './DetailHotel.css'
import { HotelDetail2 } from "../../components/HotelDetail2/HotelDetail2";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShowsDetails from "../../components/ShowsDetails/ShowsDetails";
import CardShow from "../../components/CardShow/CardShow";
import axios from 'axios';

export const DetailHotel = () => {

    
    

    let { id } = useParams();
    const [detailCards, setDetailCards] = useState([])
    const [show, setShow] = useState([])


    useEffect(() => {
      axios.get(`http://localhost:8080/api/hotel/`)
      .then(res => setDetailCards(res.data.data))

      console.log(detailCards);

      axios.get(`http: //localhost:8080/api/shows?hotelId=${id}`)
      .then(res => setShow(res.data.data))
      // eslint-disable-next-line
    }, []);

    console.log(id);

  

  if (detailCards) {
    return (
        <div className='CONTENEDOR-PADRE'>
          <div className='contenedor-details'>
            <h2>DETAILS</h2>
          </div>
            <div className="detail-cities">
                <div className="img-detail">

                    <img className="" src={detailCards.photo} alt= {detailCards.name} />
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