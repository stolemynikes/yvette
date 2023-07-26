import React from 'react'

import { Link } from 'react-router-dom'

import BoxPhoto from '../assets/images/kennis/BoxFoto.jpg'

//styling
import '../styles/_homepagebox.scss'

export default function HomeKennisBox() {
  return (
    <Link to='/kennismakingsgesprek' className='kennisbox-container'>

        <img src={BoxPhoto} alt="" />

        <div>

            <h1>Kennismakingsgesprek</h1>

            <div>
                <p>&quot;Ik kijk naar je uit !&quot;</p>
            </div>

        </div>

        <div>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>

        </div>

    </Link>
  )
}
