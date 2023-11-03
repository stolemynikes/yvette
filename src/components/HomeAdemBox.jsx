import React from 'react'

import { Link } from 'react-router-dom'

//pictures
import BoxPhoto from '../assets/images/adem/BoxFoto.jpg'

//styling
import '../styles/_homepagebox.scss'

export default function HomeAdemBox() {
  return (
    <Link to='/ademwerk' className='adembox-container'>

        <div>
            <img src={BoxPhoto} alt="" />
        </div>

        <div>

            <h1>Ademwerk</h1>

            <div>
                <p>Ademen, meer dan alleen in- en uit</p>
            </div>

        </div>

    </Link>
  )
}
