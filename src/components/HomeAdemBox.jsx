import React from 'react'

import { Link } from 'react-router-dom'

//pictures
import BoxPhoto from '../assets/images/adem/BoxFoto.jpg'

//styling
import '../styles/_homepagebox.scss'

export default function HomeAdemBox() {
  return (
    <Link to='/ademwerk' className='adembox-container'>

        <img src={BoxPhoto} alt="" />

        <div>

            <h1>Ademwerk</h1>

            <div>
                <p>&quot;Ademen, meer dan alleen in- en uit&quot;</p>
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
