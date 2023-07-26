import React from 'react'

import Foto1 from '../assets/images/kennis/Foto1.jpg'

import '../styles/_kennispage.scss'

export default function Kennismakingsgesprek() {
  return (
    <div className='kennis-container'>

        <h1>GRATIS en VRIJBLIJVEND KENNISMAKINGSGESPREK</h1>

        <div>

            <div>

                <p>Plan hier je vrijblijvende telefoongesprek van  +/- 30 minuten.</p>
                <p>Want hoe fijn is het om weer een stap verder te komen?</p>
                <p>We bespreken wat jij nodig hebt, zodat ook voor jou ontspanning binnen handbereik komt.</p>
                <p>Ik kijk ernaar uit om je te leren kennen!</p>

                <button>Afspraak maken</button>

            </div>

            <div>
                <img src={Foto1} alt="" />
            </div>


        </div>

    </div>
  )
}
