import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './Components/Pages/NotFound/NotFound';
import Home from './Components/Pages/PublicPages/Home/Home';
import Destinations from './Components/Pages/PublicPages/Destinations/Destinations';
import Blogs from './Components/Pages/PublicPages/Blogs/Blogs';
import About from './Components/Pages/PublicPages/About/About';
import Hotels from './Components/Pages/PublicPages/Hotels/Hotels';
import Tours from './Components/Pages/PublicPages/Tours/Tours';
import data from './data/destinationsData.json';
import { createContext, useEffect, useState } from 'react';
import Loading from './Components/Pages/Loading/Loading';

export const destinationContext = createContext([]);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  })
  return (
    <>
      {
        isLoading ? (<Loading />) : (
          <Routes>
            <Route path='/' element={<destinationContext.Provider value={data.data}><Home></Home></destinationContext.Provider>}></Route>
            <Route path='/destinations' element={<destinationContext.Provider value={data}><Destinations></Destinations></destinationContext.Provider>}></Route>
            <Route path='/blogs' element={<Blogs></Blogs>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/hotels' element={<Hotels></Hotels>}></Route>
            <Route path='/tours' element={<Tours></Tours>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
        )
      }
    </>
  );
}

export default App;
