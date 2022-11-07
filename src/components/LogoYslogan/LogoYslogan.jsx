import './LogoYslogan.css'
import logo from "../../img/logoprov.png"
import {Link as LinkRouter} from 'react-router-dom'

export default function ContainerHome1(){
    return (
    <>
    <div className= "ContainerHome1" >
        <div className= "ContenidoHome1">
            <div className='title-logo'>
            <h1>My Tinerary</h1>
            <img src={logo} alt='logo'></img>
            </div>
        </div>
        <div className='text-linksch'>
        <div className= "Home1p" >
            <p>"Everything for your next getaway"</p>
        </div>
            <div className= "ContenidoHome1-1" >
                <LinkRouter to='/Cities'>
                <div className= "SelecHome1" ><p>Cities</p></div></LinkRouter>
<               LinkRouter to='/Hotels'>
                <div className= "SelecHome1" ><p>Hotels</p></div></LinkRouter>

            </div>
        </div>
    </div>
    
    
    
    
    
    </>
    )
}