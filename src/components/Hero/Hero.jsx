import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'

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

                {/* hero buttons */}

                <div className="hero-buttons">
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>

            </div>

            {/* right side */}

            <div className="right-h">
                <button className='btn'>Join Now</button>

                <div className='heart-rate'>
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </div>

                {/* hero images */}

                <img src={hero_image} alt="" className='hero-image' />
                <img src={hero_image_back} alt="" className='hero-image-back' />

                {/* calories */}
                <div className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 cal</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero