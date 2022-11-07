import './Filtro1.css'
import dataCities from '../../dataCities'

export default function Filtro1() {
    return (

       <div className='contenedor-checkbox'>
        <div className="Filtro1-checkbox">
          <input  type="checkbox"  id="ch1"  value="America" />America
        </div>
        <div className="Filtro1-checkbox">
          <input type="checkbox" id="ch2"  value="Europe"  />Europe
        </div>
     </div>
    )
    
    
    }