import './Newcity.css'
import React, { useState } from 'react';
import axios from 'axios';
import {BASE_URL} from '../../api/url' 
function NewCity() {
    const [name, setName] = useState('');
    const [continent,  setContinent] = useState('')
    const [photo, setPhoto] = useState('');
    const [population, setPopulation] = useState('');
    const [userId, setUserId] = useState('');
    const submit = () => {
        if (name === "" || continent === "" || photo === "" || population === "" || userId === "") {
            alert("Please fill in all fields");
        } else {
            let newCity = { name,continent,photo,population,userId}
            axios.post(`${BASE_URL}/api/cities`,newCity)
            .then(res => {
                console.log(res);
            })
            localStorage.setItem("newCity", JSON.stringify(newCity)); 
        }
    };
    return (
        <>
        <div className='CONTENEDORPADRE2'>
          <div className='ParteSuperiorNew'>
                    <h2> New City</h2>
                  </div>
            <form className="form-newCity">
                <div className="form-body">
                  
                    
                    <h2 className='title2'>Create new City!</h2>
                    <input
                        type="text"
                        placeholder="Name of city"
                        className='form__input'
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Continent"
                        className='form__input'
                        onChange={(e) => setContinent(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Photo (URL)"
                        className='form__input'
                        onChange={(e) => setPhoto(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Population"
                        className='form__input'
                        onChange={(e) => setPopulation(Number(e.target.value))}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Admin"
                        className='form__input'
                        onChange={(e) => setUserId(e.target.value)}
                        required
                    />
                    <div className="submit12">
                        <button className='submit2' onClick={submit}>Create</button>
                    </div>
                </div>
            </form>
            </div>
        </>
    );
};
export { NewCity }