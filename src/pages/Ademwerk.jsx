import React from 'react'
import { useRef, useEffect } from 'react'

import AdemBanner from '../assets/images/adem/Banner.jpg'
import Foto1 from '../assets/images/adem/Foto1.jpg'
import Foto2 from '../assets/images/adem/Foto2.jpg'

import '../styles/_adempage.scss'

//gsap
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);


export default function Ademwerk() {

    const bannerRef = useRef()
    const text1Ref = useRef()
    const text2Ref = useRef()
    const text3Ref = useRef()

    console.log(text3Ref);

    useEffect(() => {
        var AdemEl1 = bannerRef.current.children[1].children;
        gsap.fromTo(AdemEl1, {opacity: 0, x: '-50px'}, {opacity: 1, x: '0px' , duration: 1, scrollTrigger: {
            trigger: 'body',
            markers: false,
            start: "top center",
        }})

        var AdemEl2 = text1Ref.current.children[0].children;
        for(var i = 0; i < AdemEl2.length; i++){
            gsap.fromTo(AdemEl2[i], {opacity: 0, y: +50}, {opacity: 1, y: 0 , duration: .75, scrollTrigger: {
                trigger: AdemEl2[i],
                markers: false,
                start: "bottom bottom",
            }})
        }

        var AdemEl3 = text2Ref.current;
        
        gsap.fromTo(AdemEl3.children[0] , {opacity: 0, y: +50}, {opacity: 1, y: 0 , duration: .75, scrollTrigger: {
            trigger: AdemEl3.children[0],
            markers: false,
            start: "bottom bottom",
        }})

        gsap.fromTo(AdemEl3.children[1].children[1] , {opacity: 0, x: +100}, {opacity: 1, x: 0 , duration: 1, scrollTrigger: {
            trigger: AdemEl3.children[1].children[1],
            markers: false,
            start: "top center",
        }})

        for(var i = 0; i < AdemEl3.children[1].children[0].children.length; i++){
            gsap.fromTo(AdemEl3.children[1].children[0].children[i], {opacity: 0, y: +50}, {opacity: 1, y: 0 , duration: .75, scrollTrigger: {
                trigger: AdemEl3.children[1].children[0].children[i],
                markers: false,
                start: "bottom bottom",
            }})
        }

        var AdemEl4 = text3Ref.current;

        for(var i = 0; i < 3; i++){
            gsap.fromTo(AdemEl4.children[i], {opacity: 0, y: +50}, {opacity: 1, y: 0 , duration: .75, scrollTrigger: {
                trigger: AdemEl4.children[i],
                markers: false,
                start: "bottom bottom",
            }})
        }

        gsap.fromTo(AdemEl4.children[3].children[0], {opacity: 0, x: -100}, {opacity: 1, x: 0 , duration: 1, scrollTrigger: {
            trigger: AdemEl4.children[3].children[0],
            markers: false,
            start: "top center",
        }})

        for(var i = 0; i < AdemEl4.children[3].children[1].children.length; i++){
            gsap.fromTo(AdemEl4.children[3].children[1].children[i], {opacity: 0, y: +50}, {opacity: 1, y: 0 , duration: .75, scrollTrigger: {
                trigger: AdemEl4.children[3].children[1].children[i],
                markers: false,
                start: "top bottom",
            }})
        }
    })
    

  return (
    <div className='ademwerk-container'>

        <div ref={bannerRef}>

            <img src={AdemBanner} alt="" />

            <div>
                <h1>&quot;Leer vrijuit voelen en maak een verandering door&quot;</h1>
            </div>

        </div>

        <div ref={text1Ref}>

            <div>
                <p>Ademen is meer dan alleen in- en uitademen.</p>
                <p>Je kunt nog zo gezond eten, genoeg bewegen, en goed slapen, als je ademhaling niet op orde is kan het lichaam niet optimaal functioneren. </p>
            </div>

            {/* <img src={Foto1} alt="" /> */}


        </div>

        <div ref={text2Ref}>

        <p>Elk proces in je lichaam is afhankelijk van een goede ademhaling. Door je ademhaling op de juiste manier te gebruiken kun jij op een eenvoudige manier:</p>

            <div>
                <ul>
                    <li>Stress en spanning verminderen</li>
                    <li>Vastgezette emoties en blokkades laten verdwijnen</li>
                    <li>Lichamelijke klachten verzachten of oplossen</li>
                    <li>Mentaal sterker worden</li>
                    <li>Fit en energiek zijn</li>
                </ul>
                <img src={Foto2} alt="" />
            </div>


        </div>

        <div ref={text3Ref}>


            <p>De op jou persoonlijk afgestemde ademsessies zorgen voor een direct positief resultaat op fysiek, mentaal, emotioneel en spiritueel niveau.</p>

            <p>Met een ademanalyse en help ik jou om inzicht in je ademhaling te krijgen en de kracht van de adem te ontdekken. Tijdens de ademsessies laat ik jou gebruik maken van verschillende ademhalingstechnieken. </p>

            <p>Ook geef ik je achtergrondinformatie over de werking van de adem en ga jij thuis aan de slag met de oefeningen die je mee krijgt. </p>


            <div>

                <img src={Foto1} alt="" />

                <div>

                <p>Zo kun je tussen de ademsessies door verder gaan met het ontwikkelen van een goede ademhaling. Je zult leren deze doelgericht en op een juiste manier te blijven inzetten.</p>

                <p>Wil je meer weten over mijn werkwijze en de grote voordelen van een goede ademhaling? Neem dan via onderstaande button contact met me op</p>

                <p>Gewoon doen! Elke stap is er één.. </p>

                <button className='button'>Afspraak plannen</button>

                </div>

            </div>

        </div>

        <div>
        </div>


    </div>
  )
}
