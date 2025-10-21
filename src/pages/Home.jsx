import React from 'react';
import { Link } from 'react-router-dom';

//gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
import { useRef, useEffect } from 'react';

//picture import
import Banner from '../assets/images/homepage/banner.jpg';
import HomePhoto from '../assets/images/homepage/Foto1.jpg'

//styling
import '../styles/_homepage.scss';

//box components
import HomeAdemBox from '../components/HomeAdemBox';
import HomeCoachingBox from '../components/HomeCoachingBox';
import HomeHondenBox from '../components/HomeHondenBox';
import HomeStressBox from '../components/HomeStressBox';

import AdemSlider from '../components/AdemSlider';
import CoachingSlider from '../components/CoachingSlider';
import AVHSlider from '../components/AVHSlider';
import StressmanagementSlider from '../components/StressmanagementSlider';

export default function Home() {
  return (
    <div className='homepage-container'>

        <div className='homepage-banner'>
            <img src={Banner} alt="" />

            <div>
                <h1>Voel jij te veel onrust en wil je weer ontspannen leven?</h1>
            </div>
        </div>

        <div className='homepage-text1 p5-10'>
            <p>Je hoofd staat niet stil.</p>
            <p>Je denkt de hele dag aan wat je nog moet doen, de dingen waar je tegen op ziet en nog niet aan toegekomen bent, de afspraken die je nog hebt, de tijd die je tekort komt.</p>
            <p>Je komt niet tot ontspanning.</p>
            <p>Je hoofd staat niet stil, negatieve gedachten dringen zich op en je denken gaat maar door. Je piekert over van alles.</p>

            <p>Je hebt het gevoel dat je de controle kwijt raakt, gespannen en overprikkeld bent. Je voelt de druk dat je tekort schiet en niet goed genoeg bent.</p>
            <p>Je slaapt slecht, bent niet veerkrachtig en hebt weinig energie.</p>
            
        </div>

        <div className='homepage-text2 p5-10'>

                <img src={HomePhoto} alt="" />

                <div>

                    <p>Wil jij ook meer rust in je hoofd en minder stress ervaren?</p>

                    <p>Neem dan vandaag de 1e stap!</p>

                    <p>In een vrijblijvend kennismakingsgesprek krijgen we samen helder wat jouw specifieke vraag is en hoe ik jou kan ondersteunen.</p>
                    
                    <Link className='button-nav' to='/kennismakingsgesprek'>Kennismakingsgesprek</Link>

                </div>

        </div>

        <div className="homepage-boxes">

            <HomeStressBox/>
            <HomeAdemBox/>
            <HomeCoachingBox/>
            <HomeHondenBox/>

        </div>

        <div className='testimonials-boxes p5-10'>
            {/* <h1>Testimonials</h1> */}
            <div className='slider-container adem-slider-container'>
                <StressmanagementSlider/>
            </div>
        </div>

        <div className="testimonials-boxes p5-10">
            <div className='slider-container '>
                <AdemSlider/>
            </div>
        </div>

        <div className="testimonials-boxes p5-10">
            <div className='slider-container '>
                <CoachingSlider/>
            </div>
        </div>

        <div className="testimonials-boxes p5-10">
            <div className='slider-container '>
                <AVHSlider/>
            </div>
        </div>

    </div>
  )
}
