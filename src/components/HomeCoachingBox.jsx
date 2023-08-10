import React from 'react'

import { Link } from 'react-router-dom'

//pictures
import BoxPhoto from '../assets/images/coaching/BoxFoto.jpg'

//styling
import '../styles/_homepagebox.scss'

export default function HomeCoachingBox() {
  return (
    <Link to='/coaching' className='coachingbox-container'>

        <img src={BoxPhoto} alt="" />

        <div>

            <h1>Coaching</h1>

            <div>
                <p>&quot;Samen met een hond jezelf ontdekken&quot;</p>
            </div>

            {/* <button>Meer over coaching</button> */}

        </div>

    </Link>
  )
}
