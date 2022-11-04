import React from 'react'

export default function Flechas(props) {
    let {direction}= props
    let {onClick}= props
  return (
    <img src={direction} alt="flecha" onClick={onClick}/>
  )
}
