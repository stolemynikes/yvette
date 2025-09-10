import React from 'react'
import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

import AdemBanner from '../assets/images/adem/Banner.jpg'
import Foto1 from '../assets/images/adem/Foto1.jpg'
import Foto2 from '../assets/images/adem/Foto2.jpg'
import Foto3 from '../assets/images/adem/Foto3.jpg'

//logos
import HERLEVA from '../assets/images/certificaten/HERLEVA.webp';
import CRKBO from '../assets/images/certificaten/CRKBO.png'
import KTNO from '../assets/images/certificaten/KTNO.svg'
import BATC from '../assets/images/certificaten/BATC.png'
import LVNG from '../assets/images/certificaten/LVNG.png'
// import HERLEVA2 from '../assets/images/certificaten/HERLEVA.webp'

import '../styles/_adempage.scss'


export default function Ademwerk() {

    return (

        <>

        <div className="ademwerk2-container">

            <div className='page-banner'>

                <img src={AdemBanner} alt="" />

                <div>
                    <h1>'Leer vrijuit voelen en maak een verandering door'</h1>
                </div>

            </div>

            <div className="ademwerk2-text1 p5-10">

                <div>

                    <p>Ademen is meer dan alleen in- en uitademen.</p>
                    <p>Je kunt nog zo gezond eten, genoeg bewegen en goed slapen, maar als je ademhaling niet op orde is kan het lichaam niet optimaal functioneren.</p>
                        
                    <p>Elk proces in je lichaam is afhankelijk van een goede ademhaling.</p>
                    <p>Door je ademhaling op de juiste manier te gebruiken kun jij op een eenvoudige manier:</p>

                    <div>
                        <ul>
                            <li>stress en spanning verminderen</li>
                            <li>vastgezette emoties en blokkades laten verdwijnen</li>
                            <li>lichamelijke klachten verzachten of oplossen</li>
                            <li>mentaal sterker worden</li>
                            <li>fit en energiek zijn</li>
                        </ul>
                    </div>

                </div>

                <img src={Foto2} alt="" />

            </div>

            <div className="ademwerk2-text2 p5-10">

                <img src={Foto1} alt="" />

                <div>

                    <p>Zet je adem doelgericht in</p>

                    <p>De op jou persoonlijk afgestemde ademsessies zorgen voor een direct positief resultaat op fysiek, mentaal, emotioneel en spiritueel niveau.</p>

                    <p>Met een ademanalyse help ik jou om inzicht in je ademhaling te krijgen.</p>

                    <p>De toepassing van verschillende ademtechnieken zorgt ervoor dat je de kracht van de ademhaling ontdekt.</p>

                    <p>Ook geef ik je achtergrondinformatie over de werking van de adem. en ga jij thuis aan de slag met de oefeningen die je mee krijgt. Zo kun je tussen de ademsessies door verder gaan met het ontwikkelen van een goede ademhaling.  </p>

                    <p>Je zult leren deze doelgericht en op een juiste manier te blijven inzetten. </p>

                </div>

            </div>

            <div className="ademwerk2-text3 p5-10">

                <div>

                    <p>Pak de regie en kies voor ontspanning</p>

                    <p>Wil je meer weten over mijn werkwijze en de grote voordelen van een goede ademhaling?</p>

                    <p>Of wil je het gewoon gaan ervaren?</p>

                    <p>Neem dan via onderstaande button contact met me op.</p>

                    {/* <Link className='button-nav' to='/kennismakingsgesprek'>Kennismakingsgesprek</Link> */}
                    <Link className='button-nav' to='/kennismakingsgesprek'>Kennismakingsgesprek</Link>

                </div>

            <img src={Foto3} alt="" />
                
            </div>

            <div className='certificaten-logos p5-10'>

                <div>

                    <p>Gediplomeerd ademcoach.</p>
                    <img src={HERLEVA} alt="" />

                </div>

                <div>

                    <p>Opleiding geaccrediteerd door:</p>

                    <div>
                    <img src={CRKBO} alt="" />
                    <img src={KTNO} alt="" />
                    <img src={BATC} alt="" />
                    <img src={LVNG} alt="" />
                    </div>

                </div>

            </div>

        </div>

        </>

    )
}