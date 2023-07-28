import React from 'react'

import HondenBanner from '../assets/images/honden/Banner.jpg'

//pictures
import Foto1 from '../assets/images/honden/Foto1.jpg'
import Foto2 from '../assets/images/honden/Foto2.jpg'
import Foto3 from '../assets/images/honden/Foto3.jpg'

import '../styles/_hondenpage.scss'

export default function AngstVoorHonden() {
  return (
    <div className='honden-container'>

        <div>

            <img src={HondenBanner} alt="" />

            <div>
            <h1>&quot;Angst helpt om vooruit te komen&quot;</h1>
            </div>
        </div>

        <div>

            <div>
                    
                <p>Je bent op het punt aangekomen van een grote uitdaging en verandering.</p>
                <p>Want hoe fijn zou het zijn om rustig over straat, het strand of door het bos te kunnen lopen zonder steeds alert te zijn op de aanwezigheid van die harige viervoeters?</p>
                <p>Angst is hét signaal voor jou om de stap te nemen om vooruit te komen!</p>

            </div>

            <img src={Foto1} alt="" />
        </div>

        <div>

            <img src={Foto2} alt="" />

            <div>

                <p>Door het inzetten van je moed kun jij leren om weer te vertrouwen. Het vertrouwen dat je nodig hebt om in situaties met honden de regie te nemen.</p>
                <p>Als begeleider ondersteun ik jou bij het herkennen, erkennen en onder controle krijgen van je angst. Samen onderzoeken we welk gedrag de hond laat zien en hoe jij regie kunt nemen op de momenten die ertoe doen.</p>
                <p>Als je genoeg vertrouwen hebt opgebouwd, kun je daarna in de praktijk rustig oefenen met mijn hond en collega Fred. </p>
                <p>Fred is samen met mij opgeleid. Omdat hij deze beroepstraining heeft genoten kan hij mensen goed lezen en ondersteunen. </p>
                <p>Fred is betrouwbaar, stabiel, zacht in de omgang en een grote leermeester zonder oordeel. </p>

            </div>

        </div>

        <div>

            <div>

                <p>Als jij gemotiveerd bent om de angst aan te pakken doorloop ik samen met jou de 7 stappen van de methode ‘Stappen van Inzicht’. </p>
                <p>Deze methode helpt je om de angst beheersbaar te maken of misschien wel kwijt te raken.</p>

                <p>De flexibiliteit binnen dit programma zorgt voor maatwerk op basis van jouw behoefte. </p>
                <p>Het is geen ‘quick fix’ of medicijn maar wel een beproefde aanpak waarmee positieve resultaten worden behaald. </p>

                <p>Wil je meer weten over mijn werkwijze en de ‘Stappen van Inzicht’ ? Neem dan via onderstaande button contact met me op. </p>
                <p>Gewoon doen! Elke stap is er één.</p>

                <button>Afspraak plannen</button>

            </div>

        <img src={Foto3} alt="" />

        </div>

        <div>
        </div>


    </div>
  )
}
