import React from 'react'

export default function Inputs(props) {
    let { classN, type, place, id, refId} = props
    return (
        <label>
            <input className={classN} type={type} placeholder={place} id={id} ref={refId} required />
        </label>
    )
}