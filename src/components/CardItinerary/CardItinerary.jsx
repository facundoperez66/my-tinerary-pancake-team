import React, { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux'
import reactionActions from '../../redux/actions/reactionActions'
import Reaction from '../Reaction/Reaction'
import "./CardItinerary.css"
import Comments from "../Comments/Comments"



export default function CardItinerary(props) {
    let { itinerary } = props
    const dispatch = useDispatch()
    const { getReactions } = reactionActions
    let [seeComments, setSeeComments] = useState(false)





    useEffect(() => {
        dispatch(getReactions(itinerary._id))
        // eslint-disable-next-line
    }, [])


    let see = () => {
        setSeeComments(!seeComments)
    }
    
   
    return (
        <>
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
                    <button onClick={see} className="bg-palette2 w-40 flex justify-center p-1 p-x-3">
                        <p>Comments</p>
                    </button>
                    </div>
                    <div className="PosicionamientodeReaction123">
                        <Reaction eventId={itinerary._id} type='itinerary' />
                    </div>
                </div>

            </div>
        




        {seeComments && (
        <div className='caja-comentarios1234'>

            <Comments eventId={itinerary._id} type='itinerary' />

        </div>
        )}
        </div>
</>

    )
}