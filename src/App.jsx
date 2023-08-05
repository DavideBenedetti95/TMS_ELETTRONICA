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
      {loading ? (<Loader/>):
      (
      <div>
        <Navbar/>
          <div>
            <Routes>
              <Route path='/' element={<Hero/>}/>
              <Route path='/chi-siamo' element={<AboutUs title="Chi Siamo" description="La T.M.S. Elettronica nasce a Roma nel 1990 e negli anni è diventata leader nel settore del EMS (Electronic Manufacturing Services).
                  Si occupa di assemblaggio di cablaggi elettronici e di schede elettroniche con tecnologie SMT (Surface Mount Technology) e tradizionali (through the hole), assemblaggio di apparecchiature meccaniche ed elettromeccaniche.
                  La nuova sede di Ariccia permette di offrire un servizio ancor più qualificato e specializzato, con l’ampliamento dei reparti di produzione elettronica, meccanica e cablaggi, l`introduzione della nuova area ESD e la sezione dedicata alla finitura conformal coating.
                  Il costante innovamento che dal 1990 l’azienda porta avanti come marchio di fabbrica, determina l’acquisizione di nuove apparecchiature e macchinari di ultima generazione, volte a migliorare l’eccellenza nella qualità dei processi produttivi e l’alta produttività attraverso le nuove tecnologie."/>}/>
              <Route path='/servizi' element={<AboutUs/>}/>
              <Route path='/mission' element={<AboutUs/>}/>
              <Route path='/contatti' element={<AboutUs/>}/>
            </Routes>
          </div>
      </div>
      )}
    </main>
  )
}

export default App