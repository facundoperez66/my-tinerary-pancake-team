import './FotoCard.css'



export default function FotoCard({foto}){

return(

    <>
<div className='PhotoCards'>
<img src={foto} alt='City' className='Photos' />
</div>
</>
)
}