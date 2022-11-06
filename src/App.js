import './App.css';
import Home from './pages/Home/Home';
import {Routes, Route} from 'react-router-dom'
import Cities from './pages/Cities/Cities';
import Hotels from './pages/Hotels/Hotels';
import Main from './layouts/Main/Main';
import NotFound from './pages/NotFound/NotFound';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
function App() {

  return (
    <>

<Main>
  <ScrollToTop />
<Routes>
  
<Route path='/index' element={<Home />} />
<Route path='/Cities' element={<Cities />} />
<Route path='/Hotels' element={<Hotels />} />
<Route path='/notfound' element={<NotFound />} />

</Routes>

   </Main>
    


   {/*  <Main></Main> */}
    
    
    
   
   
    </>
  );
}



export default App;
