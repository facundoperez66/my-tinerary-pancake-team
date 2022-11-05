import './App.css';
import Home from './pages/Home/Home';
import Home2 from './components/Home2/Home2';
import {Routes, Route} from 'react-router-dom'
import Main from './layouts/Main/Main';
import Cities from './pages/Cities/Cities';
import Hotels from './pages/Hotels/Hotels';

import Prueba from './pages/Prueba/Prueba';
function App() {

  return (
    <>
   
<Main>
<Routes>
  
<Route path='/index' element={<Home />} />
<Route path='/Cities' element={<Cities />} />
<Route path='/Hotels' element={<Hotels />} />

</Routes>

   </Main>
    



   {/*  <Main></Main> */}
   
    </>
  );
}



export default App;
