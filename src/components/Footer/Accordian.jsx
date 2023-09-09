import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import youtube from '../../assets/youtube.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import facebook from '../../assets/facebook.png';
import { AiOutlineDown, AiOutlineRight } from 'react-icons/ai'
import './Footer.css';

function Accordian() {
    const [showProducts, setShowProducts] = useState(false);
    const [showLegal, setShowLegal] = useState(false);
    const [showLearn, setShowLearn] = useState(false);
    const [showCompany, setShowCompany] = useState(false);

    // Function to toggle the visibility of a section
    const toggleSection = (section) => {
        switch (section) {
            case 'products':
                setShowProducts(!showProducts);
                break;
            case 'legal':
                setShowLegal(!showLegal);
                break;
            case 'learn':
                setShowLearn(!showLearn);
                break;
            case 'company':
                setShowCompany(!showCompany);
                break;
            default:
                break;
        }
    };

    return (
        <>
            <div className="footer-small">
                <div className="footer-left">
                    <img src={logo} className="footer-logo" alt="buypower logo" />
                    <p>©2023 BuyPower Inc. Datapex Drifty Technologies. All Rights Reserved.</p>
                    <div className="social-icons">
                        <img src={youtube} alt="youtube logo" />
                        <img src={instagram} alt="instagram logo" />
                        <img src={twitter} alt="twitter logo" />
                        <img src={facebook} alt="facebook logo" />
                    </div>
                </div>

                <div className="footer-right">
                    <div className="footer-one">
                        <div className="header-text-btn">
                            <h3>
                                products
                            </h3>
                            <button
                                className="toggle-button"
                                onClick={() => toggleSection('products')}
                            >
                                {showProducts ? <AiOutlineDown /> : <AiOutlineRight />}
                            </button>
                        </div>
                        {showProducts && (
                            <ul>
                                <li><a href="#">Buy Electricity</a></li>
                                <li><a href="#">Buypower for Business coming soon</a></li>
                                <li><a href="#">Data Bundle coming soon</a></li>
                                <li><a href="#">Airtime coming soon</a></li>
                                <li><a href="#">TV coming soon</a></li>
                            </ul>
                        )}
                    </div>

                    <div className="footer-two">
                        <div className="header-text-btn">
                            <h3>
                                legal
                            </h3>
                            <button
                                className="toggle-button"
                                onClick={() => toggleSection('legal')}
                            >
                                {showLegal ? <AiOutlineDown /> : <AiOutlineRight />}
                            </button>
                        </div>
                        {showLegal && (
                            <ul>
                                <li><a href="#">Terms of Use</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        )}
                    </div>

                    <div className="footer-three">
                        <div className="header-text-btn">
                            <h3>
                                learn
                            </h3>
                            <button
                                className="toggle-button"
                                onClick={() => toggleSection('learn')}
                            >
                                {showLearn ? <AiOutlineDown /> : <AiOutlineRight />}
                            </button>
                        </div>
                        {showLearn && (
                            <ul>
                                <li><a href="#">Press</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        )}
                    </div>

                    <div className="footer-four">
                        <div className="header-text-btn">
                            <h3>company</h3>
                            <button
                                className="toggle-button"
                                onClick={() => toggleSection('company')}
                            >
                                {showCompany ? <AiOutlineDown /> : <AiOutlineRight />}
                            </button>
                        </div>
                        {showCompany && (
                            <ul>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">About</a></li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Accordian;