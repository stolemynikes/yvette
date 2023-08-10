import React from 'react'
import { useRef, useState, useEffect } from 'react'

import CoachingBanner from '../assets/images/coaching/Banner.jpg'

import '../styles/_coachingpage.scss'

//gsap
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

//pictures
import Foto1 from '../assets/images/coaching/Foto1.jpg'
import Foto2 from '../assets/images/coaching/Foto2.jpg'
import Foto3 from '../assets/images/coaching/Foto3.jpg'

export default function Coaching() {

    const bannerRef = useRef()
    const text1Ref = useRef()
    const text2Ref = useRef()

    // console.log(text1Ref.current.children)

    useEffect(() => {
        var AdemEl1 = bannerRef.current.children[1].children;
        gsap.fromTo(AdemEl1, {opacity: 0, x: '-50px'}, {opacity: 1, x: '0px' , duration: 1, scrollTrigger: {
            trigger: 'body',
            markers: false,
            start: "top center",
        }})

        var AdemEl2 = text1Ref.current.children

        // for(var i = 0; i < AdemEl2.length; i++){
        //     gsap.fromTo(AdemEl2[i], {opacity: 0, y: +50}, {opacity: 1, y: 0 , duration: .75, scrollTrigger: {
        //         trigger: AdemEl2[i],
        //         markers: true,
        //         start: "top center",
        //     }})
        // }

        var AdemEl3 = text2Ref.current.children

        // for(var i = 0; i < AdemEl3.length; i++){
        //     gsap.fromTo(AdemEl3[i], {opacity: 0, y: +50}, {opacity: 1, y: 0 , duration: .75, scrollTrigger: {
        //         trigger: AdemEl3[i],
        //         markers: true,
        //         start: "top center",
        //     }})
        // }
})

  return (
        <div className='coaching-container'>

        <div ref={bannerRef}>

            <img src={CoachingBanner} alt="" />

            <div>
                <h1>&quot;Ontdekken wie je bent op een zachte en grensverleggende manier&quot;</h1>
            </div>

        </div>

        <div ref={text1Ref}>

            <div>
                <p>Samen met een hond een vraagstuk omtrent je persoonlijke ontwikkeling aanpakken en je eigen mogelijkheden ontdekken? </p>
                <p>Mijn ervaring is dat dit een prachtige en zachte manier is om jezelf te verkennen.</p>
                <p>Ik ben er erg enthousiast over omdat het mij een enorme innerlijke verdieping en transformatie heeft gebracht. </p>
                <p>Ik zie en voel zoveel meer helderheid over wie ik ben, hoe ik me gedraag, wat mijn kwaliteiten zijn en wat mijn weg is om te gaan in deze wereld.</p>
                <p>En dat is wat ik jou en al mijn andere cliënten ook graag breng.</p>
            </div>

            <img src={Foto1} alt="" />


        </div>

        <div ref={text2Ref}>

            <img src={Foto2}alt="" />

            <div>

                <p>Een sessie met Fred is altijd ontspannen en zorgt voor een unieke en impactvolle ervaring, één die jou aanzet tot inzichten en gedragsverandering.</p>
                <p>Fred is samen met mij opgeleid en we werken als collega’s.</p>
                <p>Omdat hij deze beroepstraining heeft genoten kan hij mensen goed lezen en ondersteunen.</p>
                <p>Als jij met ons een sessie ervaart laat hij door zijn gedrag zien wat er bij jou speelt. Dat is fantastisch want zo zijn er niet altijd woorden nodig.</p>
                <p>Fred is betrouwbaar, stabiel, zacht in de omgang en een grote leermeester zonder oordeel.</p>
                <p>Wil jij meer in verbinding komen met jezelf maar weet je niet hoe?   Durf jij het aan om te veranderen?   Patronen te doorbreken?   Belemmeringen om te zetten in kansen? In beweging te komen en te vernieuwen?</p>
                
            </div>


        </div>

        <div>

            <div>

                <p>Fred en ik willen voor jou de ontspannen basis zijn van waaruit jij rustig kunt ontdekken wie je nog meer bent. </p>
                <p>Wil je meer weten over onze werkwijze en mijn geweldige collega?</p>
                <p>Neem dan via onderstaande button contact met me op. </p>
                <p>Gewoon doen! Elke stap is er één. </p>

                <button className='button'>Afspraak maken</button>
            </div>

            <div>

                <img src={Foto3} alt="" />

            </div>

        </div>


    </div>
  )
}
