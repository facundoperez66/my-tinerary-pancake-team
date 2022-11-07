import './CardCity.css'
import dataCities from '../../dataCities'
import FotoCard from '../FotoCard/TituloyFotoCard'
import TituloCard from '../TituloCard/TituloCard'
import ContinenteCity from '../ContinenteCity/ContinenteCity'
import PopulationCity from '../PopulationCity/PopulationCity'


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
<div  className='botonCard'  >
<button>More</button>
</div>
        </div>


        </>
        
    )






}