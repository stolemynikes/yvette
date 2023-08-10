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

    </Link>
  )
}
