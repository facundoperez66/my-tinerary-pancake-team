import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import reactionActions from '../../redux/actions/reactionActions'
import { useState, useEffect } from 'react'
import "./Reaction.css"


export default function Reaction(props) {
    let { eventId, type } = props
    const dispatch = useDispatch()
    const { getReactions, updateReaction } = reactionActions
    const { token, id } = useSelector(state => state.user)
    const [reload, setReload] = useState(true)
    const [reaction, setReaction] = useState({})

    useEffect(() => {
        reactions()
        // eslint-disable-next-line 
    }, [reload])

    async function reactions() {
        let datos = {
            type,
            eventId,
        }
        let res = await dispatch(getReactions(datos))
        setReaction(res.payload)
    }

    async function press(e) {
        let name
        reaction.data.forEach(react => {
            if (react.name === e.target.name) {
                name = react.name
            }
        })

        let datos = {
            token,
            id: eventId,
            name,
            type,
        }
        try {
            await dispatch(updateReaction(datos))
            setReload(!reload)
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {
                reaction.success &&
                reaction.data.map(react => {
                    let res = react.userId.find(user => user._id === id)
                    return (
                        
                        <div key={react.name} className='eventoreaction'>
                            {
                                res ? (
                                    <div className='asdasdasdasdsa'>
                                        {react.userId.length > 0 && (
                                       <div>
                                       {react.userId.map((user, index) => {
                                           index <= 2 &&(
                                                   <>
                                                   <div className='flex'>
                                                       <img className='img-fluid imgLike' src={user.photo} alt="" />
                                                       <p>{user.name} {user.lastName}</p>
                                                   </div>

                                               </>)
                                       })}<p>...</p></div>
                                        )}
                                        <img onClick={press} width='30px' name={react.name} src={react.icon} alt="icon" />
                                        <p>{reaction.lengthOfReactions[react.name]}</p>
                                    </div>
                                ) : (
                                    <div className=''>
                                        {
                                            react.userId.length > 0 && (
                                                <div>{react.userId.map(user => {
                                                    return (<div className=''>
                                                        
                                                        <p>{user.name} {user.lastName}</p>
                                                    </div>)
                                                })}</div>
                                            )}
                                        
                                        <img onClick={press} width='30px' name={react.name} src={react.iconBack} alt="icoBack" />
                                        <p>{reaction.lengthOfReactions[react.name]}</p>
                                    </div>
                                )
                            }
                        </div>
                    )
                })
            }
        </>
    )
}