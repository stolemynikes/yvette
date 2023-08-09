import React from 'react'
import { useEffect, useRef, useState } from 'react';

//router
import { Link } from 'react-router-dom'

//styling
import '../styles/_navbar.scss'

export default function Navbar() {
    
    // const [color, setColor] = useState(false)

    // const changeColor = () => {
    //     if(window.scrollY >= 60) {
    //         setColor(true)
    //     } else {
    //         setColor(false)
    //     }
    // }

    // window.addEventListener('scroll', changeColor)

  return (
    <>

    <div className="navbar-under"></div>
    
    <div className="navbar">

        <div>

            <div className='logo'>

                Yvette van Zadel

            </div>

            <div className='link-container'>

                <div>

                    <Link to='/'>Home</Link>
                    <Link to='/over-ons'>Over ons</Link>
                    <Link to='/tarieven'>Tarieven</Link>
                    <Link to='/contact'>Contact</Link>

                </div>

                <div>
                    <Link to='/ademwerk'>Ademwerk</Link>
                    <Link>Coaching</Link>
                    <Link>Angst voor honden</Link>
                </div>
            </div>


            <div className='nav-button'>

            <Link className='button-nav'>Kennismakings Gesprek</Link>

            </div>


        </div>

    </div>
    
    </>
  )
}
