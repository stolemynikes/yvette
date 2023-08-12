import React from 'react'

import { Link } from 'react-router-dom'

import Foto1 from '../assets/images/kennis/Foto1.jpg'

import '../styles/_kennispage.scss'

export default function Kennismakingsgesprek() {
  return (
    <div className='kennis-container'>

        <div className='kennis-header p5-10'>
            <h1>GRATIS en VRIJBLIJVEND KENNISMAKINGSGESPREK</h1>
        </div>

        <div className='kennis-content p5-10'>

            <div>

                <p>Plan hier je vrijblijvende telefoongesprek van  +/- 30 minuten.</p>
                <p>Want hoe fijn is het om weer een stap verder te komen?</p>
                <p>We bespreken wat jij nodig hebt, zodat ook voor jou ontspanning binnen handbereik komt.</p>
                <p>Ik kijk ernaar uit om je te leren kennen!</p>

                <Link className='button-nav' to='https://calendly.com/jocktmp-gcmeo/test-afspraak'>Afspraak maken</Link>

            </div>

            <img src={Foto1} alt="" />

        </div>

    </div>
  )
}