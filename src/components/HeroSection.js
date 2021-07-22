import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
import logo from '../images/Moxie_logo.png';
import logo2 from '../images/Moxie_logo_stack.png';


function HeroSection() {
    return (
        <div className='hero-container'>
            <img className='logo2' src={logo2} alt='logo2'/>
            <img className='logo' src={logo} alt='logo'/>
            <p>Don't you deserve to feel good?</p>

            <div className="hero-btns">
                <Button 
                classname='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--lrg'
                onClick='/booking' 
                >
                    Book Online Today
                </Button>
                <Button
                className='btns'
                 buttonStyle='btn--primary'
                 buttonSize='btn--large'
                onClick={{pathname: "tel:+12176794337"}} 
                > 
                Give us a call
                <i className='fa fa-phone' />
                </Button>
                
            </div>
        </div>
    )
}

export default HeroSection
