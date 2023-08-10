import React from "react";
import {Fade } from 'react-awesome-reveal'

const Contacts = () => {
  return (
    <Fade>

      <h2 className="text-4xl md:text-7xl text-center mt-4 md:mt-8">Contatti</h2>


      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center min-h-screen w-full p-24">
        
        <div className="flex flex-col justify-center items-center mb-12 md:mb-0">
          <h2 className="pb-4 border-b-2 border-b-white w-[360px] text-center mt-16">T.M.S Elettronica</h2>
          <p className="mt-6 text-center">Via Traspontina, 40 00072 ARICCIA (RM)</p>
          <p className="mt-6 text-center">Tel: 067213686</p>
          <p className="mt-6 text-center">Cell: 3483904265</p>
          <p className="mt-6 text-center">Email: info@tmselettronica.it</p>
          <p className="mt-6 text-center">P.IVA: 13515571001</p>
            
            <div className="mt-12 border-t-2 border-white flex flex-col justify-center items-center text-center pt-4">
                <p>Sede Legale</p>
                <p>Via Anicio Gallo, 102</p>
                <p>00174 ROMA (RM)</p>
            </div>
         
        </div>

        {/* Google Maps */}
        <div>
            <iframe className="min-w-full h-[400px] md:w-[900px] md:h-[470px] border-0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11913.354365639578!2d12.622825!3d41.713212!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1325859d3936d33f%3A0xfd10ce5b5953fce6!2sT.M.S.%20Elettronica!5e0!3m2!1sen!2sit!4v1691670659148!5m2!1sen!2sit" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </Fade>
  );
};

export default Contacts;
