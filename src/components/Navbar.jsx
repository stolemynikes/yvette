import React from 'react'
import { useEffect, useRef, useState } from 'react';

//router
import { Link } from 'react-router-dom'

//styling
import '../styles/_navbar.scss'

export default function Navbar() {
    
    const [color, setColor] = useState(false)

    const changeColor = () => {
        if(window.scrollY >= 60) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

  return (
    <>

    <div className="navbar-under"></div>
    
    <div className={color ? 'navbar-scroll navbar-container' : 'navbar-container navbar-noscroll'}>

        <div>

            <div>

                Fred & Yvette

            </div>

            <div>

                <Link to='/'>Home</Link>
                <Link to='/over-ons'>Over ons</Link>
                <Link to='/tarieven'>Tarieven</Link>
                <Link to='/contact'>Contact</Link>

            </div>


            {/* <div>

            <Link><button>Contact</button></Link>

            </div> */}


        </div>

    </div>
    
    </>
  )
}
