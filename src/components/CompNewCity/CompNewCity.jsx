import React from 'react'
import FormNewCity from '../FormNewCity/FormNewCity'
import './CompNewCity.css'
import { useState } from 'react'

export function CompNewCity() {

  const [nameCity, setNameCity] = useState("");
  const [continent, setContinent] = useState("");
  const [photo, setPhoto] = useState("");
  const [population, setPopulation] = useState("");

  const submit2 = () => {

    {
        let newCity = { nameCity, continent, photo, population}
        localStorage.setItem("New City", JSON.stringify(newCity));
        alert("Thanks you");
    }



  }





  return (
    <div className='newcity-container'>
        <div className='card-newcity'>
            <h3 className='titlenew'>Create New City</h3>
        
            <div className='form-signin'>
                <form action="">
                <label htmlFor="nameCity">Name of the City</label>
    <input type="text" placeholder='Enter Name City' onChange={(e) => setNameCity(e.target.value)} />

    <label htmlFor="Continent">Continent</label>
    <input type="text" placeholder='Enter Continent' onChange={(e) => setContinent(e.target.value)} />

    <label htmlFor="photo">Photo URL</label>
    <input type="text" placeholder='Enter Photo URL' onChange={(e) => setPhoto(e.target.value)} />

    <label htmlFor="population">Population</label>
    <input type="text" placeholder='Enter Population' onChange={(e) => setPopulation(e.target.value)} />

    <input type="submit" value='Submit' onClick={submit2}/>
                </form>
    </div>
            
        </div>
    </div>
  )
}
