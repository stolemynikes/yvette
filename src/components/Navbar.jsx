import React from 'react'
import { useEffect, useRef, useState } from 'react';

//router
import { Link } from 'react-router-dom'

//styling
import '../styles/_navbar.scss'

export default function Navbar() {

    const [openNavbar, setOpenNavbar] = useState();

    const toggleNavbar = () => {
        setOpenNavbar((current) => !current);
    }

    useEffect(() => {
        if (openNavbar) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [openNavbar])

  return (
    <>
        <div className='navbar-container'>
            
            <div className="navbar">
        
                <div>
        
                    <div className='logo'>
        
                        <Link to='/'>Yvette van Zadel</Link>
        
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
                            <Link to='/coaching'>Coaching</Link>
                            <Link to='/angst-voor-honden'>Angst voor honden</Link>
                        </div>
                    </div>
        
        
                    <div className='nav-button'>
        
                    <Link to='/kennismakingsgesprek' className='button-nav'>Kennismakings Gesprek</Link>
        
                    </div>
        
                    {openNavbar 
                    ?
                    <div className="hamburger-mobile" onClick={toggleNavbar}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                  
                    :
                        <div className="hamburger-mobile" onClick={toggleNavbar}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                    }
        
                </div>
        
            </div>
            
            </div>

            {openNavbar 
                ?
                        <div className='mobile-navbar'>
                
                        <div>
        
                            <Link onClick={toggleNavbar} to='/'>Home</Link>
                            <Link onClick={toggleNavbar} to='/ademwerk'>Ademwerk</Link>
                            <Link onClick={toggleNavbar} to='/coaching'>Coaching</Link>
                            <Link onClick={toggleNavbar} to='/angst-voor-honden'>Angst voor honden</Link>
                            <Link onClick={toggleNavbar} to='/over-ons'>Over ons</Link>
                            <Link onClick={toggleNavbar} to='/tarieven'>Tarieven</Link>
                            <Link onClick={toggleNavbar} to='/contact'>Contact</Link>
                            <Link onClick={toggleNavbar} to='/kennismakingsgesprek' className='button-nav'>Kennismakings Gesprek</Link>
        
                        </div>
        
                    </div>
                :
            <div></div>
            }

    </>

  )
}
