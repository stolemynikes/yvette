import React from 'react'

import { Link } from 'react-router-dom'

//pictures
import BoxPhoto from '../assets/images/honden/BoxFoto.jpg'

//styling
import '../styles/_homepagebox.scss'

export default function HomeHondenBox() {
  return (
    <Link to='/angst-voor-honden' className='hondenbox-container'>

        <div>
            <img src={BoxPhoto} alt="" />
        </div>

        <div>

            <h1>Angst voor honden</h1>

            <div>
                <p>&quot;Samen met een hond jezelf ontdekken&quot;</p>
            </div>

            {/* <button>Meer over coaching</button> */}
            

        </div>

        {/* <div>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>

        </div> */}



    </Link>
  )
}
