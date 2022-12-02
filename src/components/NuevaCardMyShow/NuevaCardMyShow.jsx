import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NuevaCardMyShow(props) {

    const navigate = useNavigate()
    let { text , reDirect} = props

    function redirect() {
        navigate(`${reDirect}`)
    }

    return (
        <div className="card-container ">
                
                <h2 onClick={redirect}>Add a new {text}</h2>
        </div>
    )
}