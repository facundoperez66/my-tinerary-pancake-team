import './profiles.css'
import portrait from "../../img/portrait-01.jpg"
import register from "../../img/register.png"
import login from "../../img/login.png"
import React, {useState} from 'react'
import {Link as LinkRouter} from 'react-router-dom'

function Profiles() {

  const [open, setOpen] = useState(false);

  return (
    <>
    <div className="App">
      
      <div className='menu-container'>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          <img src={portrait} alt='photography'></img>
        </div>

        <div className={`dropdown-menu ${open? 'active': 'inactive' }`}>
          <h3>Hola!<br/><span>Bienvenidos</span></h3>
          <ul>
            <LinkRouter to ={'/SignIn'} >
            <DropdownItem img = {login} text = 'Sign In'/> </LinkRouter>
            <LinkRouter to ={'/SignUp'} >
            <DropdownItem img = {register} text = 'Sign Up'/></LinkRouter>
            
          </ul>

        </div>
      </div>
   
   </div>
  </> 
  );
}

function DropdownItem(props){
  return(
    <li className = 'dropdownItem'>
      <img src={props.img} alt=''></img>
      <a> {props.text} </a>

    </li>
    
  
    )

}

export default Profiles