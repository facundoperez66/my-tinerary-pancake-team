import './NewHotel.css'
import React, { useState } from 'react';
import axios from 'axios';
import {BASE_URL} from '../../api/url' 
function NewHotel() {
    const [name, setName] = useState('');
    const [capacity,  setCapacity] = useState('');
    const [photo, setPhoto] = useState('');
    const [citiId, setcitiId] = useState('');
    const [userId, setUserId] = useState('');
    const submit = () => {
        if (name === "" || capacity === "" || photo === ""  || citiId==="" || userId === "") {
            alert("Please fill in all fields");
        } else {
            let newHotel = { name,capacity,photo,citiId,userId}
            axios.post(`${BASE_URL}/api/hotels`,newHotel)
            .then(res => {
                console.log(res);
            })
            localStorage.setItem("newHotel", JSON.stringify(newHotel)); 
        }
    };
    return (
        <>
        <div className='CONTENEDORPADRE2'>
          <div className='ParteSuperiorNew'>
                    <h2> New Hotel</h2>
                  </div>
            <form className="form-newCity">
                <div className="form-body">
                  
                    
                    <h2 className='title2'>Create new Hotel!</h2>
                    <input
                        type="text"
                        placeholder="Name of hotel"
                        className='form__input'
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Capacity"
                        className='form__input'
                        onChange={(e) => setCapacity(e.target.value)}
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
                        placeholder="citiID"
                        className='form__input'
                        onChange={(e) => setcitiId(e.target.value)}
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
export { NewHotel }