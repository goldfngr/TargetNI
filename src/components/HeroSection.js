import React, { Component } from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';



function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="https://planninedesign.com/targetni-demo/videos/video-2.mp4" autoPlay loop muted />
            <h1><span>Target </span> Network Integration</h1>
            <p>
            Our portfolio of services range from LAN, WLAN, WAN, Data Center rebuild to Audio Visual installationsX
            </p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Get Started &gt;</Button>
                <Button className='btns' buttonStyle='btn--magenta' buttonSize='btn--large'>Watch Trailer 
                <i className='far fa-play-circle' /></Button>
            </div>
        </div>
    )
}


export default HeroSection 