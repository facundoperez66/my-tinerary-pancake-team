
import { useParams } from "react-router-dom"
import './DetailCity.css'

import { useState, useEffect } from "react"
import { Detail } from "../../components/Neww/ComponenteNuevo"

export const DetailCity = () => {




    let [city, setCity] = useState([])
    let {id} = useParams()

    useEffect(() => {
        fetch('/dataCities.json')
            .then(res  => res.json())
            .then(data => setCity(data.cities.find(a => a.id === parseInt(id))))
            
   },[city])
    



    return (
<>


<div className="CONTENEDOR-PADRE">
<Detail name={city.name} photo={city.photo} continent={city.continent} population={city.population}/>
        </div>


</>

    )


}