import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import reactionActions from '../../redux/actions/reactionActions'
import Reaction from '../Reaction/Reaction'
import "./CardHotels.css"
import Comments from "../Comments/Comments"
import { useState } from 'react'



export default function CardHotel(props) {
    let { event } = props
    const dispatch = useDispatch()
    const { getReactions } = reactionActions
    let [seeComments, setSeeComments] = useState(false)




    useEffect(() => {
        dispatch(getReactions(event._id))
        // eslint-disable-next-line
    }, [])

    let see = () => {
        setSeeComments(!seeComments)
    }



    return (
        <>
        <div className='ProbamosaVerEsto123123 '>
            <div className='CardhotelsDetailsa142421'>
                <img className='' width='400px' src={event.photo} alt="" />
                <h1>{event.name}</h1>
                <p>{event.description}</p>
                <p>{event.date.split('T00:00:00.000Z')}</p>
                <div className=''>
                    <p>Price : ${event.price}</p>
                    <button onClick={see} className="bg-palette2 w-40 flex justify-center p-1 p-x-3">
                            <p>Comments</p>
                        </button>
                    <div className="CajaContenedoraDeREACIONTS123">
                        <Reaction eventId={event._id} type='show' />
                    </div>
                </div>

            </div>
        
        {seeComments && (
                <div className='caja-comentarios1234'>

                    <Comments eventId={event._id} type='show' />

                </div>
            )}
</div>
        </>
    )
}