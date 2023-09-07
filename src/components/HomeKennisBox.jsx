import React from 'react'

import { Link } from 'react-router-dom'

import BoxPhoto from '../assets/images/kennis/BoxFoto.jpg'

//styling
import '../styles/_homepagebox.scss'

export default function HomeKennisBox() {
  return (
    <Link to='/kennismakingsgesprek' className='kennisbox-container'>

        <div>
            <img src={BoxPhoto} alt="" />
        </div>

        <div>

            <h1>Kennismakingsgesprek</h1>

            <div>
                <p>&quot;Ik kijk naar je uit !&quot;</p>
            </div>

        </div>

    </Link>
  )
}
