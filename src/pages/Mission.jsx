import React from "react";
import {Fade } from 'react-awesome-reveal'

const Mission = () => {
    return (
        <Fade duration={2000}>
            <div className="min-h-screen w-full flex justify-center items-center flex-col">
                <h1 className="text-4xl mt-6 md:mt-0 md:text-7xl">MISSION</h1>
                <h3 className="mt-2 text-l md:text-xl">Dal Progetto al Prodotto</h3>
                <p className="text-center mt-12 p-6 md:p-12">
                Il rapporto con i nostri clienti è di estrema fiducia e collaborazione. L’ormai trentennale esperienza nel settore ci permette di offrire un supporto volto alla soddisfazione del cliente, dalla progettazione, prototipazione, produzione, test di collaudo e assistenza post produzione, con il pieno sostegno nell’acquisizione di qualsiasi tipo di materiale per soddisfare quanto elencato. Il nostro obiettivo è seguire il cliente dall’idea, alla stesura, fino alla realizzazione del progetto con maniacale attenzione alla linea produttiva, in modo da giungere sempre a un risultato privo di errori.
                </p>
            </div>
        </Fade>
    )
}

export default Mission