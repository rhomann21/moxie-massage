import React from 'react';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Moxie Massage</h1>
            <p>Don't you deserve to feel good?</p>
            <div className="hero-btns">
                <Button 
                classname='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--lrg'>
                    Book Today
                </Button>
        
            </div>
        </div>
    )
}

export default HeroSection
