import './CardHotel.css'
import dataCities from '../../dataCities'
import FotoCard from '../FotoCard/TituloyFotoCard'
import TituloCard from '../TituloCard/TituloCard'
import ContinenteCity from '../ContinenteCity/ContinenteCity'
import PopulationCity from '../PopulationCity/PopulationCity'
import Capacity from '../CapacityCard/Capacity'


export default function CardHotel({ datos }) {

    return (

        <>
            <div className='card-Hotel'>

                <FotoCard foto={datos.photo[0]} />
                <div className='TituloCard2'>
                <TituloCard titulo={datos.name} />
                </div>
                <div className='UnderCard2'>
                    <Capacity Campo='Capacity' dato={datos.capacity} />

               
              
                </div>
                  <div className='botonCard2'  >
                    <button>More</button>
                   </div>  
            </div>


        </>

    )






}