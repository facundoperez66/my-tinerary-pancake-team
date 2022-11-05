import React from 'react'
import Home2 from '../../components/Home2/Home2'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import './Main.css'
export default function Main(props) {
  console.log(props.children)
  return (

    <>
     
    <Header> </Header>
    <div>{props.children} </div>
    <Footer></Footer>  
     
    
    
    </>
  )

  


 
}
 
 /*    <>
    <Header />
    
    <Footer />
   
    </>
  ) */