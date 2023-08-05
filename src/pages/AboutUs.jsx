import React from 'react'
import Gallery from '../components/Gallery'
import { Slide } from "react-awesome-reveal";

const AboutUs = () => {
  return (
    <Slide>
      <div className='min-h-screen min-w-screen flex flex-col justify-center items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='flex flex-col justify-center items-center p-8 min-h-auto'>
                <h3 className='text-3xl border-b-slate-950 border-b-2 pb-8 w-72 text-center mb-8 mt-24 md:mt-0'>
                  Chi Siamo
                </h3>
                <p>
                  La T.M.S. Elettronica nasce a Roma nel 1990 e negli anni è diventata leader nel settore del EMS (Electronic Manufacturing Services).
                  Si occupa di assemblaggio di cablaggi elettronici e di schede elettroniche con tecnologie SMT (Surface Mount Technology) e tradizionali (through the hole), assemblaggio di apparecchiature meccaniche ed elettromeccaniche.
                  La nuova sede di Ariccia permette di offrire un servizio ancor più qualificato e specializzato, con l’ampliamento dei reparti di produzione elettronica, meccanica e cablaggi, l`introduzione della nuova area ESD e la sezione dedicata alla finitura conformal coating.
                  Il costante innovamento che dal 1990 l’azienda porta avanti come marchio di fabbrica, determina l’acquisizione di nuove apparecchiature e macchinari di ultima generazione, volte a migliorare l’eccellenza nella qualità dei processi produttivi e l’alta produttività attraverso le nuove tecnologie.
                </p>
            </div>

            <div className='p-4 md:mt-16'>
                <Gallery/>
            </div>
            
        </div>
      </div>
    </Slide>
  )
}

export default AboutUs