import React, {useEffect, useState} from 'react'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Loader from './components/Loader'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Mission from './pages/Mission'
import Contacts from './pages/Contacts'
import {Route, Routes} from "react-router-dom";
import data from "./data/data.json";

const App = () => {
  
  const [loading, setLoading] = useState(false);
  
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    },1000)
  }, []);

  return (
    <main>
      {loading ? (<Loader/>):
      (
      <div>
        <Navbar/>
          <div>
            <Routes>
              <Route path='/' element={<Hero/>}/>
              <Route path='/chi-siamo' element={<AboutUs title={data.at(0).title} description={data.at(0).description}/>}/>
              <Route path='/servizi' element={<Services title={data.at(1).title} description={data.at(1).description}/>}/>
              <Route path='/mission' element={<Mission/>}/>
              <Route path='/contatti' element={<Contacts/>}/>
            </Routes>
          </div>
      </div>
      )}
    </main>
  )
}

export default App