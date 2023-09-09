import mobile1 from '../../assets/mobile1.png'
import mobile2 from '../../assets/mobile2.png'
import mobile3 from '../../assets/mobile3.png'
import download1 from '../../assets/download1.png'
import download2 from '../../assets/download2.png'

import './Download.css'

function Download(){
    return(
        <>
         <div className="download">
            <div className="download-img">
               <img src={mobile1} className="mobile-one" alt="payment method" />
               <img src={mobile2} className="middle-child" alt="customer profile" />
               <img src={mobile3} className="mobile-two" alt="contact us page" />
            </div>

            <div className="download-text">
                <h3>Download our Mobile app</h3>
                <p>Top up Electricity and other payments quickly with our mobile app</p>
                <div className="download-text-images">
                    <img src={download1} alt="download on app store" />
                    <img src={download2} alt="download on google play" />
                </div>
            </div>
         </div>
        </>
    )
}

export default Download