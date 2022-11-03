import './profiles.css'
import portrait from "../../img/portrait-01.jpg"
import register from "../../img/register.png"
import login from "../../img/login.png"
import React, {useState} from 'react';

function profiles() {

  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      
      <div className='menu-container'>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          <img src={portrait}></img>
        </div>

        <div className={`dropdown-menu ${open? 'active': 'inactive' }`}>
          <h3>Hola!<br/><span>Bienvenidos</span></h3>
          <ul>
            <DropdownItem img = {login} text = 'Log In'/>
            <DropdownItem img = {register} text = 'Register'/>
            
          </ul>

        </div>
      </div>
    
   </div>
  );
}

function DropdownItem(props){
  return(
    <li className = 'dropdownItem'>
      <img src={props.img} ></img>
      <a> {props.text} </a>

    </li>
  )
}

export default profiles