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
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div className='ideal'>
                        <span>In here we will help you to shape and build your ideal body and live your life to the fullest</span>
                    </div>

                </div>

                {/* figures */}

                <div className='figures'>
                    <div>
                        <span>140+</span>
                        <span>Expert Coaches</span>
                    </div>
                    <div>
                        <span>978+</span>
                        <span>Members Joined</span>
                    </div>
                    <div>
                        <span>50+</span>
                        <span>Fitness Programs</span>
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