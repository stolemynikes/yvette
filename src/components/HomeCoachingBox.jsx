import React from 'react'

import { Link } from 'react-router-dom'

//pictures
import BoxPhoto from '../assets/images/coaching/BoxFoto.jpg'

//styling
import '../styles/_homepagebox.scss'

export default function HomeCoachingBox() {
  return (
    <Link to='/coaching' className='coachingbox-container'>

        <div>
            <img src={BoxPhoto} alt="" />
        </div>

        <div>

            <h1>Coaching</h1>

            <div>
                <p>Samen met een hond jezelf ontdekken</p>
            </div>

            {/* <button>Meer over coaching</button> */}

        </div>

    </Link>
  )
}
