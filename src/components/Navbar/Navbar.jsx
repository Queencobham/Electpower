import React, { useState } from 'react';
import logo from '../../assets/logo.png'
import './Navbar.css'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    function toggleMenu() {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className={`container navbar ${isOpen ? 'open' : ''}`}>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="menu-toggle" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                <div className="nav-links-small">
                    <ul>
                        {isOpen && (
                            <div className="list-items">
                                <li className="close-icon" onClick={toggleMenu}>X</li>
                                <li><a href="#">Merchant</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Blog</a></li>
                                <li className='buy-electricity'><a href="#">Buy Electricity</a></li>
                            </div>
                        )}
                    </ul>
                </div>

                <div className="nav-links-large">
                    <ul>
                        <li><a href="#">Merchant</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li className='login-btn'><a href="#">Login</a></li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar

