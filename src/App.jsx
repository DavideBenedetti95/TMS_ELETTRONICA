import React, {useEffect, useState} from 'react'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Loader from './components/Loader'
import AboutUs from './pages/AboutUs'
import {Route, Routes} from "react-router-dom";

const App = () => {
  
  const [loading, setLoading] = useState(false);
  
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    },2000)
  }, []);

  return (
    <main>
      {/* {loading ? (<Loader/>):
      ( */}
      <div>
        <Navbar/>
          <div>
            <Routes>
              <Route path='/' element={<Hero/>}/>
              <Route path='/about-us' element={<AboutUs/>}/>
            </Routes>
          </div>
      </div>
      {/* )} */}
    </main>
  )
}

export default App