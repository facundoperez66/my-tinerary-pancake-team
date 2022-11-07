import React from 'react'
import './CompSignUp.css'
import FormSignUp from '../FomSignUp/FormSignUp'
import GoogleButton from '../GoogleButton/GoogleButton'
import {useState, useEffect} from 'react'

export function CompSignUp() {

  const registor = () => {
    let dataR = localStorage.getItem("registration");
    if(dataR){
        return JSON.stringify(dataR);
    } else{ 
      return [];
  }
}


const [registration, setRegistration] = useState ("");
const [name, setName] = useState("");
const [surName, setSurName] = useState("");
const [user, setUser] = useState("");
const [mobileNumber, setMobileNumber] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const FormularioLimpio = () => {
    setName("");
    setSurName("");
    setUser("");
    setMobileNumber("");
    setEmail("");
    setPassword("");
    
    window.location.replace('./index');
}
// HandleSubmit will receive the form data if form validation is successful.
//PreventDefault is called on the event when submitting the form to prevent a browser reload/refresh.
/// ... argument list
const handleSubmit = (e) => {
    e.preventDefault();
    let myObject = { name,surName,user,mobileNumber,email,password }
    setRegistration([...registration, myObject]);
    FormularioLimpio();

};



//Dates's Petition

useEffect(() =>{
    localStorage.setItem("register", JSON.stringify(registration));
    
});




  return (
      <div className='signup-container'>
          <div className='card-signup'>
          <h3>Sign Up!</h3>
          <div className='google-button'>
              <p>Continue with Google</p>
              <img src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png" alt="" />
             
          </div>
  
          <div className='form-signin'>
      <form onSubmit={handleSubmit} action="">
      <label htmlFor="name">Name</label>
      <input type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
  
      <label htmlFor="surname">Surname</label>
      <input type="text" placeholder='Enter Surname' onChange={(e) => setSurName(e.target.value)} />
  
      <label htmlFor="mail">Mail</label>
      <input type="text" placeholder='Enter Mail' onChange={(e) => setEmail(e.target.value)} />
          
      <label htmlFor="tel">Tel</label>
      <input type="text" placeholder='Enter Tel' onChange={(e) => setMobileNumber(e.target.value)} />
          
      <label htmlFor="username">User</label>
                  <input type="text" placeholder='Enter User Name' id='usernamejs' onChange={(e) => setUser(e.target.value)}/>
  
                  <label htmlFor="password">Password</label>
      <input type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
  
      <input type="submit" value='Submit' />
  
      </form>
  </div>
         
          </div>
      </div>
    )
  }
  
  
  
