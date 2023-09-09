import sp1 from '../../assets/sp1.png'
import sp2 from '../../assets/sp2.png'
import sp3 from '../../assets/sp3.png'
import sp4 from '../../assets/sp4.png'
import sp5 from '../../assets/sp5.png'
import sp6 from '../../assets/sp6.png'
import sp7 from '../../assets/sp7.png'
import sp8 from '../../assets/sp8.png'
import sp9 from '../../assets/sp9.png'
import './Hero.css'

function Hero() {
    return (
        <>
            <div className="hero">
                <div className="hero-content">
                    <div className="first-content">
                        <h1>Buy Electricity and simplify payouts
                            for your business</h1>
                        <div className="first-content-btn">
                        <a href="#" className='hero-create-btn'>create account</a>
                        <a href="#" className='hero-login-btn'>login</a>
                        </div>
                        <p>Need help? call: 0908-749-3044</p>
                    </div>

                    <div className="second-content">
                        <h2>our service providers</h2>
                        <div className="sp-logos">
                            <img src={sp1} alt="service provider logo" />
                            <img src={sp2} alt="service provider logo" />
                            <img src={sp3} alt="service provider logo" />
                            <img src={sp4} alt="service provider logo" />
                            <img src={sp5} alt="service provider logo" />
                            <img src={sp6} alt="service provider logo" />
                            <img src={sp7} alt="service provider logo" />
                            <img src={sp8} alt="service provider logo" />
                            <img src={sp9} alt="service provider logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero