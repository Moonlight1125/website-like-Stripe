import React from 'react'
import '../components/common.css'
import icons from '../Images/PayFormAdvetise.jpg'

const Hero = () => {
  return (
    <div className={"Hero"}>
        <section className='payments'>
        <h1 className={"introduce"}>
            Payments <br />
            infrastructure <br />
            for the internet <br />
        </h1>
        <p className={"extraInfo"}>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
        </p>
        <button className={"startBtn"}>Start Now</button>
        </section>

        <div className="payForm">
            <article className={"view"}>
                <div className={"ItemIconContainer"}><img className={"ItemIcon"} src={icons} alt="" /></div>
                <p id={"commLetter"} className={"itemName"}>
                    Internet Magazine <br />
                    $14 per quarters
                </p>
                <button className={"payBtn"}>Pay</button>
                <p id={"commLetter"} style={{opacity:0.6}}>or pay with card</p>
            </article>
            <article className={"privateInformation"}>
                <label htmlFor="">
                    <p id={"commLetter"}>Email</p>
                    <input type="text" />
                </label>

                <label htmlFor="">
                <p id={"commLetter"}>Card Information</p>
                <input type="text" placeholder='Number'/>
                <input type="text" placeholder='MM/YY GVC '/>
                </label>

                
                <label htmlFor="">
                <p id={"commLetter"}>Country or region</p>
                <input type="text" placeholder='Unites States'/>
                <input type="text" placeholder='ZIP'/>
                </label>
                <button className={"payBtn"}>Pay $14</button>
            </article>
        </div>
    </div>
  )
}

export default Hero