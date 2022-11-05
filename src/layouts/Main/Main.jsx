import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
export default function Main(props) {
  return (
    <>
    <Header/>
    <div>{props.children}</div>
    <Footer/>
   
    </>
  )
}
