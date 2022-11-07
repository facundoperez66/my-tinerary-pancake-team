import './CardCity.css'
import dataCities from '../../dataCities'
import FotoCard from '../FotoCard/TituloyFotoCard'
import TituloCard from '../TituloCard/TituloCard'
import ContinenteCity from '../ContinenteCity/ContinenteCity'
import PopulationCity from '../PopulationCity/PopulationCity'
import {Link as LinkRouter} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import ButtonMore from '../ButtonMore/ButtonMore'

export default function CardCity({datos}) {
    
    return(

        <>

        
        <div className='card-City'>
   
    <FotoCard  foto={datos.photo}/>
    <TituloCard titulo={datos.name}/>
    <div className='UnderCard'>
    <ContinenteCity Campo='Continente' dato={datos.continent}/>
    <PopulationCity Campo='Population' dato={datos.population}/>
    
</div>
{dataCities.map( everyCity =>
<LinkRouter to={`/cities/${everyCity.id}`} key={everyCity.id}>
<div  className='botonCard'  >

<button>More</button>

</div>
</LinkRouter>
)}
        </div>


        </>
        
    )






}