import "./Hotels.css"
import React, { useRef, useState, useEffect } from 'react'
import HotelCard from '../../components/HotelCard/HotelCard'
import hotelActions from '../../redux/actions/hotelActions'
import { useDispatch, useSelector } from 'react-redux'


export default function Hotels() {

    const dispatch = useDispatch()
    const {hotels,name,order}=useSelector(state=>state.hotel)
    const {getAllHotels,getHotelsFiltered}= hotelActions
    const searchId = useRef()
    const selectId = useRef()

    useEffect(() => {
       if(name||order){
        let info = {name,order}
       
       dispatch(getHotelsFiltered(info))
       searchId.current.value= name
       searchId.current.value= order
        }else{
            dispatch(getAllHotels())
        }
    }, [])

    function filterCheckCards(){
        let order = selectId.current.value

        if (order !== 'asc' && order !== 'desc') {
            order = 'asc'
        }
       let info = {
        name:searchId.current.value,
        order
       }
       dispatch(getHotelsFiltered(info))
    }
    

    return (
        <div className="cities-container">
            <div className='TituloHeader3'>
            <h2>Hotels </h2>
            <div>
<form>
<label>
<input className="SearchBarHotels213" type="search" name='search' id='search' placeholder='Search' ref={searchId} onChange={filterCheckCards} />
</label>
<label>
<select className="SelectHotels1234" name="select" defaultValue={'default'} onChange={filterCheckCards} ref={selectId}>
<option value="default" disabled>Select a order:</option>
<option value="asc">Ascendent</option>
<option value="desc">Descendent</option>
</select>
</label>
</form>

    </div>

</div>
            <div className="cards-container">
                {hotels.length > 0 ?(
                    hotels.map((hotel,index) => {
                        return <HotelCard hotel={hotel} key={index}/>
                    })
                ):(<img className='img-fluid' width='10%' src="https://cdn-icons-png.flaticon.com/512/4952/4952559.png" alt="Not Found Search" />)}
                
            </div>
        </div>
    )
}