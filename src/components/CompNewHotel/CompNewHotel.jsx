import React from 'react'
import FormNewHotel from '../FormNewHotel/FormNewHotel'
import './CompNewHotel.css'
import { useState } from 'react'
export  function CompNewHotel() {

  const [nameHotel, setNameHotel] = useState("");
  const [capacity, setCapacity] = useState("");
  const [photo, setPhoto] = useState("");
  const [photo2, setPhoto2] = useState("");
  const [photo3, setPhoto3] = useState("");
 
  const submit3 = () => {

    {
        let newHotel = { nameHotel, capacity, photo,photo2,photo3}
        localStorage.setItem("New Hotel", JSON.stringify(newHotel));
        alert("Thanks you");
    }



  }




  return (
    <div className='newhotel-container'>
        <div className='card-newhotel'>
            <h3 className='titlenew'>Create New Hotel</h3>
            <div className='form-signin'>
        <form action="">
        <label htmlFor="namehotel">Name of the Hotel</label>
    <input type="text" placeholder='Enter Name Hotel' onChange={(e) => setNameHotel(e.target.value)}/>
    <label htmlFor="photo">Photo URL</label>
    <input type="text" placeholder='Enter Photo URL' onChange={(e) => setPhoto(e.target.value)} />
    <label htmlFor="photo">Photo URL</label>
    <input type="text" placeholder='Enter Photo URL' onChange={(e) => setPhoto2(e.target.value)}/>
    <label htmlFor="photo">Photo URL</label>
    <input type="text" placeholder='Enter Photo URL' onChange={(e) => setPhoto3(e.target.value)}/>
    <label htmlFor="capacity">Capacity</label>
    <input type="text" placeholder='Enter Capacity' onChange={(e) => setCapacity(e.target.value)}/>
    <input type="submit" value='Submit' onClick={submit3}/>
        </form> 
    </div>
        </div>
    </div>
  )
}
