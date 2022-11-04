import './LogoYslogan.css'
import logo from "../../img/logoprov.png"


export default function ContainerHome1(){
    return (
    <>
    <div className= "ContainerHome1" >
        <div className= "ContenidoHome1">
<h1>  My Tinerary</h1>
<img src={logo}></img>

</div>
<div className= "Home1p" >
<p>"Everything for your next getaway"</p>
</div>
<div className= "ContenidoHome1-1" >
<div className= "SelecHome1" ><p>Cities</p></div>
<div className= "SelecHome1" ><p>Hotels</p></div>

</div>

    </div>
    
    
    
    
    
    </>
    )
}