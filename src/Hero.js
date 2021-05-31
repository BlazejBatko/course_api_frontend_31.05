import React from 'react'
import './App.css'
import { Button } from './Button';
import './Hero.css';


function Hero() {
    return (
        <div className='hero-container'>
            <video src="/videos/video.mp4" autoPlay loop muted />
            <h1>System do zarządzania Kursami IT</h1>
            <p>Zacznij zarządzać już teraz</p>
            <div className='hero-btns'>
                <Button 
                className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'>
                    ROZPOCZNIJ
                </Button>
                <Button 
                className='btns' 
                buttonStyle='btn--primary' 
                buttonSize='btn--large'>
                    STWÓRZ SWOJĄ WŁASNĄ BAZĘ KURSÓW <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default Hero
