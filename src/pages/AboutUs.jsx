import React from 'react'
import Gallery from '../components/Gallery'
import { Slide } from "react-awesome-reveal";

const AboutUs = ({title, description}) => {
  return (
    <Slide>
      <div className='min-h-screen min-w-screen flex flex-col justify-center items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='flex flex-col justify-center items-center p-8 min-h-auto'>
                <h3 className='text-3xl border-b-slate-950 border-b-2 pb-8 w-72 text-center mb-8 mt-24 md:mt-0'>
                  {title}
                </h3>
                <p>
                  {description}
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