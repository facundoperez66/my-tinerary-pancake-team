import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./NuevasCards.css"

export default function CompNuevasCards(props) {

    const navigate = useNavigate()
    let { text , reDirect} = props

    function redirect() {
        navigate(`${reDirect}`)
    }

    return (
        <div className="MyNewCitiesCont">
                
                <h2 onClick={redirect}>➡️Add a new {text}</h2>
        </div>
    )
}