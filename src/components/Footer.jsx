import React from 'react'

import '../styles/_footer.scss'
import { Link } from 'react-router-dom'

export default function Footer() {
    
  return (
    <div className='footer-container'>

        <div className='footer-links'>

            <p>Pagina's</p>

            <div>

                <Link to='/'>Home</Link>
                <Link to='/over-ons'>Over ons</Link>
                <Link to='/tarieven'>Tarieven</Link>
                <Link to='/contact'>Contact</Link>
                
            </div>

        </div>

        <div className="footer-pages">

            <p>Diensten</p>

            <div>

                <Link to='/ademwerk'>Ademwerk</Link>
                <Link to='/coaching'>Coaching</Link>
                <Link to='/angst-voor-honden'>Angst voor honden</Link>

            </div>

        </div>

        <div className="footer-contact">

            <p>Contact</p>

            <div>

                <p>+31 6 27 28 14 58</p>
                <a href='mailto:info@yvettevanzadel.nl'>info@yvettevanzadel.nl</a>

            </div>

        </div>

        <div className="footer-info">

            <p>Info</p>

                <div>
                    <Link to='/algemene-voorwaarden'>Algemene voorwaarden</Link>
                    <Link to='/privacyverklaring'>Privacyverklaring</Link>
                    <p>KvK nummer: 82957045</p>

                </div>

            </div>

    </div>
  )
}
