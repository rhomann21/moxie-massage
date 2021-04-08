import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

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
                    Book Online Today
                </Button>
                <Button
                className='btns'
                 buttonStyle='btn--primary'
                 buttonSize='btn--large'
                onClick={console.log('hey')}
                >
                    Call Now <i className='fa fa-phone' />
                </Button>
                
            </div>
        </div>
    )
}

export default HeroSection
