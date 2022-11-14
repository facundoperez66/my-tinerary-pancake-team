import axios from 'axios'
import React, { useRef, useState, useEffect } from 'react'
import HotelCard from '../../components/HotelCard/HotelCard'



export default function Hotels() {

    let [hoteles, setHoteles] = useState([])
    let [hotelesFiltradas, setHotelesFiltradas] = useState([])
    
    const searchId = useRef()

    useEffect(() => {
        axios.get(`http://localhost:8080/api/hotels/`)
            .then(res => setHotelesFiltradas(res.data.data))
            .catch(err => console.log(err))

       
        
    }, [])



   

       
        

       

   

    return (
        <div className="cities-container">
            <div className='TituloHeader3'>
            <h2>Hotels </h2>
            <form className="category-container" method="get">
                
                <label className='prueba12321'>
                    <input className="search-input w-100" type="search" name="search" id="search" placeholder="Search" ref={searchId}  />
                </label>

              
            </form>
            
</div>
            <div className="cards-container">

                {hotelesFiltradas.length > 0 ? (
                    hotelesFiltradas.map((hotel, index) => {
                        return <HotelCard hotel={hotel} key={index} />
                    }))
                    : (
                        <img className='img-fluid' width='100%' src="./img/notsearch.png" alt="Not Found Search" />
                    )}
            </div>
        </div>
    )
}