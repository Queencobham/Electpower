import buynow from '../../assets/buynow.png'
import paywithbank from '../../assets/paywithbank.png'
import paywithussd from '../../assets/paywithussd.png'
import setreminders from '../../assets/setreminders.png'
import payments from '../../assets/payments.png'
import customersupport from '../../assets/customersupport.png'
import './Why.css'

function Why(){
    return(
        <>
        <div className="why">
            <div className="why-header">
                <h1>why choose buypower?</h1>
                <p>Pellentesque sollicitudin massa leo mauris dui dignissim lorem. Lorem magna tortor non nec hac molestie et quis non. Gravida sem id pulvinar mattis vitae.
                    Turpis in diam vulputate amet orci lectus donec mi et.</p>
            </div>

            <div className="why-boxes">
                <div className="buy-now box">
                    <img src={buynow} alt="boxwithdollarsign" />
                    <div className="box-content">
                        <h3>buy now, pay in 14 days.</h3>
                        <p>You can Buy Electricity with a loan on BuyPower.ng and payback in 14 days.</p>
                    </div>
                </div>

                <div className="pay-with-bank box">
                    <img src={paywithbank} alt="building" />
                    <div className="box-content">
                        <h3>pay with bank tranfers.</h3>
                        <p>Make payments via our Bank Transfer option and get value immediately.</p>
                    </div>
                </div>

                <div className="pay-with-ussd box">
                    <img src={paywithussd} alt="hash symbol" />
                    <div className="box-content">
                        <h3>pay with USSD.</h3>
                        <p>No internet? Buy Electricity by dialing *402*00009548*amount# on any kind of mobile device.</p>
                    </div>
                </div>

                <div className="set-reminders box">
                    <img src={setreminders} alt="clock" />
                    <div className="box-content">
                        <h3>set reminders.</h3>
                        <p>Let us remind you to Buy Electricity. Set a reminder date and we wont forget.</p>
                    </div>
                </div>

                <div className="payments box">
                    <img src={payments} alt="signs" />
                    <div className="box-content">
                        <h3>payments</h3>
                        <p>Simplifies end-to-end workflow for your business payout processes; freeing up resources for strategic business engagements.</p>
                    </div>
                </div>

                <div className="customer-support box">
                    <img src={customersupport} alt="headphone" />
                    <div className="box-content">
                        <h3>24/7 customer support.</h3>
                        <p>Enjoy our Customer Service and have your issues resolved anytime- day and night.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Why