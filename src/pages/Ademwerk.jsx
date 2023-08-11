import React from 'react'
import { useRef, useEffect } from 'react'

import AdemBanner from '../assets/images/adem/Banner.jpg'
import Foto1 from '../assets/images/adem/Foto1.jpg'
import Foto2 from '../assets/images/adem/Foto2.jpg'
import Foto3 from '../assets/images/adem/Foto3.jpg'

import '../styles/_adempage.scss'


export default function Ademwerk() {

    return (

        <>

        <div className="ademwerk2-container">

            <div className='ademwerk-banner'>

                <img src={AdemBanner} alt="" />

                <div>
                    <h1>'Leer vrijuit voelen en maak een verandering door'</h1>
                </div>

            </div>

            <div className="ademwerk2-text1 p5-10">

                <div>

                    <p>'Ademen is meer dan alleen in- en uitademen.'</p>
                    <p>Je kunt nog zo gezond eten, genoeg bewegen, en goed slapen, als je ademhaling niet op orde is kan het lichaam niet optimaal functioneren.</p>
                        
                    <p>Elk proces in je lichaam is afhankelijk van een goede ademhaling.</p>
                    <p>Door je ademhaling op de juiste manier te gebruiken kun jij op een eenvoudige manier:</p>

                    <div>
                        <ul>
                            <li>Stress en spanning verminderen</li>
                            <li>Vastgezette emoties en blokkades laten verdwijnen</li>
                            <li>Lichamelijke klachten verzachten of oplossen</li>
                            <li>Mentaal sterker worden</li>
                            <li>Fit en energiek zijn</li>
                        </ul>
                    </div>

                </div>

                <img src={Foto2} alt="" />

            </div>

            <div className="ademwerk2-text2 p5-10">

                <img src={Foto1} alt="" />

                <div>

                    <p>'Zet je adem doelgericht in'</p>

                    <p>De op jou persoonlijk afgestemde ademsessies zorgen voor een direct positief resultaat op fysiek, mentaal, emotioneel en spiritueel niveau.</p>

                    <p>Met een ademanalyse help ik jou om inzicht in je ademhaling te krijgen. De toepassing van verschillende ademtechnieken zorgt ervoor dat je de kracht van de ademhaling ontdekt.</p>

                    <p>Ook geef ik je achtergrondinformatie over de werking van de adem. en ga jij thuis aan de slag met de oefeningen die je mee krijgt. Zo kun je tussen de ademsessies door verder gaan met het ontwikkelen van een goede ademhaling.  </p>

                    <p>Je zult leren deze doelgericht en op een juiste manier te blijven inzetten. </p>

                </div>

            </div>

            <div className="ademwerk2-text3 p5-10">

                <div>

                    <p>'Pak de regie en kies voor ontspanning'</p>

                    <p>Wil je meer weten over mijn werkwijze en de grote voordelen van een goede ademhaling?</p>

                    <p>Of wil je het gewoon gaan ervaren?</p>

                    <p>Neem dan via onderstaande button contact met me op</p>

                    <button className='button-nav'>Afspraak maken</button>

                </div>

            <img src={Foto3} alt="" />
                
            </div>

        </div>

        </>

    )
}