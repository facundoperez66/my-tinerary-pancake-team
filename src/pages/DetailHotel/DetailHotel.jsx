import './DetailHotel.css'
import { HotelDetail2 } from "../../components/HotelDetail2/HotelDetail2";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShowsDetails from "../../components/ShowsDetails/ShowsDetails";
import CardShow from "../../components/CardShow/CardShow";

export const DetailHotel = () => {

    let [hotel, setHotel] = useState([])
    

    let { id } = useParams();
  


    useEffect(() => {
      fetch("/dataHotel.json")
        .then((res) => res.json())
        .then((res) => setHotel(res.find((e) => e.id === id)));
  
  
      // eslint-disable-next-line
    }, []);

    console.log(id);
    return (
        <>


<div className="CONTENEDOR-PADRE">
<HotelDetail2 name={hotel.name} photo={hotel.photo} capacity={hotel.capacity} />
        </div>
        <div className="CONTENEDORINFERIOR34">
      <ShowsDetails className="NOSEEEE" id={hotel.id} ></ShowsDetails>
      <div className="ComentariosBoton">
     <button>View Comments</button>
     </div>
      </div>

</>







    )
}