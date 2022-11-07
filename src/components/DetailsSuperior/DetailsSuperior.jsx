import './DetailsSuperior.css'
import FotoDetails from '../FotoDetails/FotoDetails'
import TituloCard from '../TituloCard/TituloCard'




export default function DetailsSuperior({datos}){
    return(
<>
<div className='FotoDetails2'>
<FotoDetails  fotos={datos.photo}/>  
<TituloCard titulo={datos.name}/>


</div>

</>
    )







}