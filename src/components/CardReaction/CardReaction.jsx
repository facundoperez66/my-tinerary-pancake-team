import React from 'react'
import "./CardReaction.css"

export default function CardReactions(props) {
   let { reaction, name, icon, id, fxDelete } = props
   return (
      <div className='CajaContenedoraDeReactionsProfile'>
         <img className='img-reaction12312323' src={reaction.photo} alt={reaction.name} />
         <h4>{reaction.name}</h4>
         <div className=''>
            <h5 className=''><img src={icon} alt="icon" width='30px' />{name}</h5>
            <p className='FuncionDeletearReaction123' onClick={fxDelete}>Delete Reaction</p>
         </div>


      </div>
   )
}