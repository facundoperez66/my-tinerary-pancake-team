import { useParams } from "react-router-dom"
import './DetailCity.css'
import { useState, useEffect } from "react"
import { Detail } from "../../components/Neww/ComponenteNuevo"
import Events from "../../components/Itinerary/Itinerary"

export const DetailCity = () => {



    let [city, setCity] = useState([])
    

    let { id } = useParams();
  


    useEffect(() => {
      fetch("/dataCities.json")
        .then((res) => res.json())
        .then((res) => setCity(res.find((e) => e.id === id)));
  
  
      // eslint-disable-next-line
    }, []);
  
  
    console.log(id);
    return (
<>


<div className="CONTENEDOR-PADRE">
<Detail name={city.name}  photo={city.photo} continent={city.continent} population={city.population}/>
        </div>
        <div className="CONTENEDORINFERIOR3">
      <Events className="p-2" id={city.id}></Events>
      <div className="ComentariosBoton">
     <button>View Comments</button>
     </div>
      </div>

</>

    )


}
