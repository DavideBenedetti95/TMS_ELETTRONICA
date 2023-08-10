import React from 'react'
import { Slide, Fade } from 'react-awesome-reveal'

const Services = ({title, description}) => {
  return (
    <div>
        <Slide direction='right'>
            <div className='min-h-screen flex justify-center items-center'>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='px-4 md:p-8 md:px-0 mt-24 md:mt-0'>
                        <img className='md:p-8' src="https://images.pexels.com/photos/132700/pexels-photo-132700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>

                    <div className='flex flex-col justify-center items-center p-4 md:p-8'>
                        <h3 className='text-3xl border-b-white border-b-2 pb-8 w-72 text-center mb-8 mt-24 md:mt-0'>
                            {title}
                        </h3>
                        
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </Slide>

        <Fade>
            <div className="flex flex-col w-full md:w-[85%] mx-auto px-2 md:px-0 mt-6 md:mt-0">
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center">PROGETTAZIONE</div> 
                <div className="divider"></div> 
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center text-center">SUPPORTO NELL`ACQUISIZIONE DEL MATERIALE</div>
                <div className="divider"></div> 
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center">ASSEMBLAGGIO DI SCHEDE</div>
                <div className="divider"></div> 
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center text-center">ASSEMBLAGGIO APPARECCHIATURE ELETTRONICHE E MECCANICHE</div>
                <div className="divider"></div> 
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center">CABLAGGI ELETTRICI INDUSTRIALI</div>
                <div className="divider"></div> 
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center mb-12">TEST DI COLLAUDO FINALE</div>
            </div>
        </Fade>

    </div>
  )
}

export default Services 