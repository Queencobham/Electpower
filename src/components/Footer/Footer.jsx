import logo from '../../assets/logo.png'
import youtube from '../../assets/youtube.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import facebook from '../../assets/facebook.png'
import Accordian from './Accordian.jsx'
import './Footer.css'

function Footer() {
    return (
        <>
            <div className="footer-large">
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
                        <h3>products</h3>
                        <ul>
                            <li><a href="#">Buy Electricity</a></li>
                            <li><a href="#">Buypower for Business coming soon</a></li>
                            <li><a href="#">Data Bundle coming soon</a></li>
                            <li><a href="#">Airtime coming soon</a></li>
                            <li><a href="#">TV coming soon</a></li>
                        </ul>
                    </div>

                    <div className="footer-two">
                        <h3>legal</h3>
                        <ul>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div className="footer-three">
                        <h3>learn</h3>
                        <ul>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>

                    <div className="footer-four">
                        <h3>company</h3>
                        <ul>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-small">
                <Accordian />
            </div>
        </>
    )
}

export default Footer



