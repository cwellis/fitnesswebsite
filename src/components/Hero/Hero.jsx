import React from 'react'
import Header from '../Header/Header'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="left-h">
                <Header />

                {/* advertisement */}

                <div className="best">
                    <div></div>
                    <span>The Best Fitness Club In The City</span>
                </div>

                {/* hero heading */}

                <div className='hero-text'>
                    <div>
                        <span>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>

                </div>


            </div>
            <div className="right-h">
                Right Side
            </div>
        </div>
    )
}

export default Hero