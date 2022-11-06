import './TituloCard.css'



export default function TituloCard({titulo}){
   
    return(

        <>
<div className='tituloCard'>
<h2>{titulo.toUpperCase()}</h2>
</div>

        </>
    )

}