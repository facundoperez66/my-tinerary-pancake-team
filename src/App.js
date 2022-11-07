import './App.css';
import Home from './pages/Home/Home';
import {Routes, Route} from 'react-router-dom'
import Cities from './pages/Cities/Cities';
import Hotels from './pages/Hotels/Hotels';
import Main from './layouts/Main/Main';
import NotFound from './pages/NotFound/NotFound';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Newcity from './pages/NewCity/Newcity';
import NewHotel from './pages/NewHotel/NewHotel';
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
<Route path='/SignIn' element={<SignIn/>}/>
<Route path='/SignUp' element={<SignUp/>}/>
<Route path='/NewCity' element={<Newcity/>}/>
<Route path='/NewHotel' element={<NewHotel/>}/>
</Routes>

   </Main>
    


   {/*  <Main></Main> */}
    
    
    
   
   
    </>
  );
}



export default App;
