import React from 'react'

import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import './Main.css'
export default function Main(props) {
  console.log(props.children)
  return (

    <>
    <Header/>
    <div>{props.children}</div>
    <Footer/>
   
    </>
  )

  


 
}
 
 /*    <>
    <Header />
    
    <Footer />
   
    </>
  ) */