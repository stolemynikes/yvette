import React from 'react'
import { useEffect, useRef, useState } from 'react';

//router
import { Link, NavLink } from 'react-router-dom'

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
        
                            <NavLink to='/' className={({ isActive}) => 
                                isActive ? "nav-active" : ""
                            }>Home</NavLink>
                            <NavLink to='/over-ons'   className={({ isActive}) =>
                            isActive ? "nav-active" : ""
                            }>Over ons</NavLink>
                            <NavLink to='/tarieven' className={({ isActive}) => 
                                isActive ? "nav-active" : ""
                            }>Tarieven</NavLink>
                            <NavLink to='/contact' className={({ isActive}) => 
                                isActive ? "nav-active" : ""
                            }>Contact</NavLink>
        
                        </div>
        
                        <div>
                            <NavLink to='/ademwerk' className={({ isActive}) => 
                                isActive ? "nav-active" : ""
                            }>Ademwerk</NavLink>
                            <NavLink to='/coaching' className={({ isActive}) => 
                                isActive ? "nav-active" : ""
                            }>Coaching</NavLink>
                            <NavLink to='/angst-voor-honden' className={({ isActive}) => 
                                isActive ? "nav-active" : ""
                            }>Angst voor honden</NavLink>
                        </div>
                    </div>
        
        
                    <div className='nav-button'>
        
                    <Link to='/kennismakingsgesprek' className='button-nav'>Kennismakingsgesprek</Link>
        
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
                            <Link onClick={toggleNavbar} to='/kennismakingsgesprek' className='button-nav'>Kennismakingsgesprek</Link>
        
                        </div>
        
                    </div>
                :
            <div></div>
            }

    </>

  )
}
