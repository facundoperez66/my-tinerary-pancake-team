import NavBar from "../components/navbar/Navbar"

function Main1(props) {
    return (
        <div className="w100 h100 flex column a-center">
            <div className=' gray flex column j-center a-center'>
            <NavBar /></div>
            <div className='w100 black flex column a-center grow w100 h100 '>ACA VA EL CONTENIDO</div> 
            <div className='w100 black flex column a-center grow'>{ props.children }</div>
            
            
            </div>
    
       
    )
}




export default Main1