import React from 'react'

import HondenBanner from '../assets/images/honden/Banner.jpg'

import { Link } from 'react-router-dom'

//pictures
import Foto1 from '../assets/images/honden/Foto1.jpg'
import Foto2 from '../assets/images/honden/Foto2.jpg'
import Foto3 from '../assets/images/honden/Foto3.jpg'

//logos
import UWV from '../assets/images/certificaten/UWV.png'
import CRKBO from '../assets/images/certificaten/CRKBO.png'
import APDT from '../assets/images/certificaten/APDT.png'
import NVGH from '../assets/images/certificaten/NVGH.svg'
import AVH from '../assets/images/certificaten/AVH2023.png'

import '../styles/_hondenpage.scss'

export default function AngstVoorHonden() {
  return (
    <div className='honden-container'>

        <div className='honden-banner page-banner'>

            <img src={HondenBanner} alt="" />

            <div>
                <h1>'Angst helpt om vooruit te komen'</h1>
            </div>

        </div>

        <div className='honden-text1 p5-10'>

            <div>
                <p>Je voelt dat het tijd is voor verandering  </p>
                <p>Je bent op het punt aangekomen van een grote uitdaging en verandering.</p>
                <p>Want hoe fijn zou het zijn om rustig over straat, het strand of door het bos te kunnen lopen zonder steeds alert te zijn op de aanwezigheid van die harige viervoeters?</p>
                <p>Angst is hét signaal voor jou om de stap te nemen en vooruit te komen!</p>

            </div>

            <img src={Foto1} alt="" />
            
        </div>

        <div className='honden-text2 p5-10'>

            <img src={Foto2} alt="" />

            <div>
                <p>De oplossing zit in jou</p>
                <p>Door het inzetten van je moed kun jij leren om weer te vertrouwen. Het vertrouwen dat je nodig hebt om in situaties met honden de regie te nemen.</p>
                <p>Als begeleider ondersteun ik jou bij het herkennen, erkennen en onder controle krijgen van je angst. Samen onderzoeken we welk gedrag de hond laat zien en hoe jij regie kunt nemen op de momenten die ertoe doen.</p>
                <p>Als je genoeg vertrouwen hebt opgebouwd, kun je daarna in de praktijk rustig oefenen met mijn hond en collega Fred. </p>
                <p>Fred is samen met mij opgeleid. Omdat hij deze beroepstraining heeft genoten kan hij mensen goed lezen en ondersteunen. </p>
                <p>Fred is betrouwbaar, stabiel, zacht in de omgang en een grote leermeester zonder oordeel. </p>

            </div>

        </div>

        <div className='honden-text3 p5-10'>

            <div>

                <p>Pak de regie en neem de stap</p>
                <p>Als jij gemotiveerd bent om de angst aan te pakken doorloop ik samen met jou de 7 stappen van de methode ‘Stappen van Inzicht’. </p>
                <p>Deze methode helpt je om de angst beheersbaar te maken of misschien wel kwijt te raken.</p>

                <p>De flexibiliteit binnen dit programma zorgt voor maatwerk op basis van jouw behoefte. </p>
                <p>Het is geen ‘quick fix’ of medicijn maar wel een beproefde aanpak waarmee positieve resultaten worden behaald. </p>

                <p>Wil je meer weten over mijn werkwijze en de ‘Stappen van Inzicht’ ? Neem dan via onderstaande button contact met me op. </p>
                <p>Gewoon doen! Elke stap is er één.</p>

                <Link className='button-nav' to='/kennismakingsgesprek'>Kennismakingsgesprek</Link>

            </div>

        <img src={Foto3} alt="" />

        </div>


        <div className="certificaten-logos-adem p5-10">

            <div>
                <p>Gediplomeerd begeleider Angst voor honden.</p>
                <img src={AVH} alt="" />
            </div>

            <div>
                <p>Opleiding geaccrediteerd door:</p>

                <div>
                    <img src={CRKBO} alt="" />
                    <img src={APDT} alt="" />
                    <img src={NVGH} alt="" />
                </div>
            </div>
        </div>


    </div>
  )
}
