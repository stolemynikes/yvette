import React from 'react'

import { Link } from 'react-router-dom'

import BoxPhoto from '../assets/images/stressmanagement/Banner.jpg'

//styling
import '../styles/_homepagebox.scss'

export default function HomeKennisBox() {
  return (
    <Link to='/stressmanagement' className='kennisbox-container'>

        <div>
            <img src={BoxPhoto} alt="" />
        </div>

        <div>

            <h1>Stressmanagement</h1>

            <div>
                <p>De verborgen wijsheid van het Hart</p>
            </div>

        </div>

    </Link>
  )
}
