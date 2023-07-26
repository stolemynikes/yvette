import React from 'react'

import CoachingBanner from '../assets/images/coaching/Banner.jpg'

import '../styles/_boxpages.scss'

export default function Coaching() {
  return (
        <div className='coaching-container'>

        <div>

            <img src={CoachingBanner} alt="" />

            <h1>&quot;Ontdekken wie je bent op een zachte en grensverleggende manier&quot;</h1>

        </div>

        <div>

            <p>Samen met een hond een vraagstuk omtrent je persoonlijke ontwikkeling aanpakken en je eigen mogelijkheden ontdekken? </p>
            <p>Mijn ervaring is dat dit een prachtige en zachte manier is om jezelf te verkennen.</p>
            <p>Ik ben er erg enthousiast over omdat het mij een enorme innerlijke verdieping en transformatie heeft gebracht. </p>
            <p>Ik zie en voel zoveel meer helderheid over wie ik ben, hoe ik me gedraag, wat mijn kwaliteiten zijn en wat mijn weg is om te gaan in deze wereld.</p>
            <p>En dat is wat ik jou en al mijn andere cliënten ook graag breng.</p>


        </div>

        <div>

        <p>Een sessie met Fred is altijd ontspannen en zorgt voor een unieke en impactvolle ervaring, één die jou aanzet tot inzichten en gedragsverandering.</p>
        <p>Fred is samen met mij opgeleid en we werken als collega’s.</p>
        <p>Omdat hij deze beroepstraining heeft genoten kan hij mensen goed lezen en ondersteunen.</p>
        <p>Als jij met ons een sessie ervaart laat hij door zijn gedrag zien wat er bij jou speelt. Dat is fantastisch want zo zijn er niet altijd woorden nodig.</p>
        <p>Fred is betrouwbaar, stabiel, zacht in de omgang en een grote leermeester zonder oordeel.</p>
        <p>Wil jij meer in verbinding komen met jezelf maar weet je niet hoe?   Durf jij het aan om te veranderen?   Patronen te doorbreken?   Belemmeringen om te zetten in kansen? In beweging te komen en te vernieuwen?</p>
            {/* <ul>
                <li>Stress en spanning verminderen</li>
                <li>Vastgezette emoties en blokkades laten verdwijnen</li>
                <li>Lichamelijke klachten verzachten of oplossen</li>
                <li>Mentaal sterker worden</li>
                <li>Fit en energiek zijn</li>
            </ul> */}


        </div>

        <div>

            <p>Fred en ik willen voor jou de ontspannen basis zijn van waaruit jij rustig kunt ontdekken wie je nog meer bent. </p>
            <p>Wil je meer weten over onze werkwijze en mijn geweldige collega?</p>
            <p>Neem dan via onderstaande button contact met me op. </p>
            <p>Gewoon doen! Elke stap is er één. </p>

        </div>

        <div>
            <button>Afspraak plannen</button>
        </div>


    </div>
  )
}
