import React from "react";
import { TypeAnimation } from 'react-type-animation';


const Hero = () => {
  return (
    <section className="bg-center bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1592659762303-90081d34b277?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1673&q=80')] grayscale ">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 h-screen flex flex-col justify-center items-center">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Siamo Veloci',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Siamo Precisi',
                1000,
                'Siamo i Migliori',
                1000,
                'Siamo la TMS Elettronica',
                1000
              ]}
              wrapper="h1"
              speed={20}
              className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl animate-fade animate-duration-[3000ms]"
              style={{display: 'inline-block' }}
              repeat={Infinity}
            />
            <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48 animate-fade animate-duration-[2000ms]">
            Guidiamo il Futuro dell'Elettronica: Eccellenza nell'Assemblaggio, Innovazione nella Produzione!
            </p>
        </div>
    </section>
  );
};

export default Hero;
