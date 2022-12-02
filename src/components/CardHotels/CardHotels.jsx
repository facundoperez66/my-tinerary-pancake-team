import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import reactionActions from '../../redux/actions/reactionActions'
import Reaction from '../Reaction/Reaction'
import "./CardHotels.css"

export default function CardHotel(props) {
    let { event } = props
    const dispatch = useDispatch()
    const { getReactions } = reactionActions

    useEffect(() => {
        dispatch(getReactions(event._id))
        // eslint-disable-next-line
    }, [])

    return (
        <div className='ProbamosaVerEsto123123 '>
            <div className='CardhotelsDetailsa142421'>
                <img className='' width='400px' src={event.photo} alt="" />
                <h1>{event.name}</h1>
                <p>{event.description}</p>
                <p>{event.date.split('T00:00:00.000Z')}</p>
                <div className=''>
                    <p>Price : ${event.price}</p>
                    <div className="CajaContenedoraDeREACIONTS123">
                        <Reaction eventId={event._id} type='show' />
                    </div>
                </div>

            </div>
        </div>
    )
}