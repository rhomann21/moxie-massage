import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
import logo from '../images/Moxie_logo.png';

function HeroSection() {
    return (
        <div className='hero-container'>
            <img className='logo'src={logo} />
            <p>Don't you deserve to feel good?</p>

            <div className="hero-btns">
                <Button 
                classname='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--lrg'
                onClick={console.log('This should open booking link!')}>
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
