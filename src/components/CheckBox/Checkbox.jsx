import React from 'react'
import "./Checkbox.css"

export default function Checkbox(props) {
    let { continent, refId, valor, fx } = props
    return (
        <label className='checkbox1233'>
            <input type="checkbox" value={valor} name={continent} ref={refId} onClick={fx} /> {continent} 
        </label>
    )
}