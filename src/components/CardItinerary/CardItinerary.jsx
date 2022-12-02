import React, { useEffect } from 'react'
import { useDispatch} from 'react-redux'
import reactionActions from '../../redux/actions/reactionActions'
import Reaction from '../Reaction/Reaction'
import "./CardItinerary.css"

export default function CardItinerary(props) {
    let { itinerary } = props
    const dispatch = useDispatch()
    const { getReactions } = reactionActions

    useEffect(() => {
        dispatch(getReactions(itinerary._id))
        // eslint-disable-next-line
    }, [])

   
    return (
        <div className='ContenedoraCardItinerary12345 '>
            <div className='CardsContenedorasDeTodo1234'>
            <div className='ParteDeLaFotoCard1232'>
                <img className='img-fluid' width='400px' src={itinerary.photo} alt="" />
                </div>
                <div className='ParteDeLaInfoCard123'>
                <h1>{itinerary.name}</h1>
                <p>{itinerary.description}</p>
                <div className=''>
                    <p>Price : ${itinerary.price}</p>
                    </div>
                    <div className="PosicionamientodeReaction123">
                        <Reaction eventId={itinerary._id} type='itinerary' />
                    </div>
                </div>

            </div>
        </div>
    )
}