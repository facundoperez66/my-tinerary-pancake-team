import './FotoDetails.css'



export default function FotoDetails({fotos}){

return(

    <>
<div className='PhotoCards1'>
<img src={fotos} alt='Photo' className='PhotosDet' />
</div>
</>
)
}