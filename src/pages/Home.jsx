import React from 'react';

//picture import
import Banner from '../assets/images/homepage/banner.jpg';
import HomePhoto from '../assets/images/homepage/Foto1.jpg'

//styling
import '../styles/_homepage.scss';

//box components
import HomeAdemBox from '../components/HomeAdemBox';
import HomeCoachingBox from '../components/HomeCoachingBox';
import HomeHondenBox from '../components/HomeHondenBox';
import HomeKennisBox from '../components/HomeKennisBox';

export default function Home() {
  return (
    <div className='homepage-container'>

        <div className='homepage-banner'>
            <img src={Banner} alt="" />

            <div>
                <h1>Voel jij teveel onrust en wil jij weer ontspannen leven?</h1>
            </div>
        </div>

        <div className='homepage-text'>

            <p>Je denkt de hele dag aan wat je nog moet doen, je boodschappenlijstje, wat je gaat eten, de dingen waar je niet aan toegekomen bent. </p>
            <p>Je piekert over je gezondheid, je naasten, belangrijke keuzes die je moet maken. Je hoofd staat niet stil, gedachten dringen zich op en je denken gaat steeds door. Je komt niet tot ontspanning, bent overprikkelt en je voelt de druk dat je tekort schiet</p>
            
        </div>

        <div className='homepage-text2'>

            <div>

                <img src={HomePhoto} alt="" />

                <div>

                    <p>Wil jij ook je gedachtestroom tot rust brengen? Neem dan vandaag de 1e stap.  </p>

                    <p>In een vrijblijvend kennismakingsgesprek krijgen we samen helder wat jouw specifieke vraag is en hoe ik jou kan ondersteunen. </p>

                    <button>Afspraak maken</button>

                </div>

            </div>

        </div>

        <div className="homepage-boxes">

            <HomeAdemBox/>
            <HomeCoachingBox/>
            <HomeHondenBox/>
            <HomeKennisBox/>

        </div>

    </div>
  )
}
