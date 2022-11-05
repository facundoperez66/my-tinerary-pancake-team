import './App.css';

import Home1 from './pages/Home/Home';
import Main from './layouts/Main/Main';
import NotFound from './pages/NotFound/NotFound';
import {Routes,Route} from 'react-router-dom'
function App() {

  return (
    <>
    <Main>
    <Routes> 
    <Route path='/index' element={<Home1 />} />
    <Route path='/notfound' element={<NotFound />} />
    </Routes>
    </Main>
    
    
   
   
    </>
  );
}



export default App;
