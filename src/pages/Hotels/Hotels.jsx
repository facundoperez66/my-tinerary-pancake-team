import axios from 'axios'
import React, { useRef, useState, useEffect } from 'react'
import HotelCard from '../../components/HotelCard/HotelCard'



export default function Hotels() {

    let [hotelesFiltradas, setHotelesFiltradas] = useState([])
    const searchId = useRef()
    const selectId = useRef()

    useEffect(() => {
        axios.get(`http://localhost:8080/api/hotels`)
            .then(res => setHotelesFiltradas(res.data.response))
            .catch(err => console.log(err))



    }, [])

    function filterCheckCards(){
        let order = selectId.current.value

        if (order !== 'asc' && order !== 'desc') {
            order = 'asc'
        }
        let search = searchId.current.value
        axios.get(`http://localhost:8080/api/hotels?name=${search}&order=${order}`)
        .then(res => setHotelesFiltradas(res.data.response))




    }












    return (
        <div className="cities-container">
            <div className='TituloHeader3'>
            <h2>Hotels </h2>
            <div>
<form>
<label>
<input type="search" name='search' id='search' placeholder='Search' ref={searchId} onChange={filterCheckCards} />
</label>
<label>
<select name="select" defaultValue={'default'} onChange={filterCheckCards} ref={selectId}>
<option value="default" disabled>Select a order:</option>
<option value="asc">Ascendent</option>
<option value="desc">Descendent</option>
</select>
</label>
</form>

    </div>

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