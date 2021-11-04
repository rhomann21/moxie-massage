import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
// import Widget from './Widget';


function HeroSection() {
    return (    
        <div className='hero-container'>
            <div className='mainLogoHeroSection'><h1>Moxie Massage</h1></div>
            {/* <img className='logo2' src={logo2} alt='logo2'/>
            <img className='logo' src={logo} alt='logo'/> */}
            <p>Don't you deserve to feel good?</p>

            <div className="hero-btns">
                <Button 
                classname='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--lrg'
                onClick={{pathname: "https://login.meevo.com/moxiemassage/ob?locationId=105890" }}  
                >
                    Book Online Today
                </Button>
                <Button 
                classname='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--lrg'
                onClick={{pathname: "https://na0.meevo.com/EgiftApp/home?tenantId=102988" }}  
                >
                    Gift Certificates
                </Button>
                {/* <Button
                className='btns'
                 buttonStyle='btn--primary'
                 buttonSize='btn--large'
                onClick={{pathname: "tel:+12176794337"}} 
                > 
                Give us a call
                <i className='fa fa-phone' />
                </Button> */}
                {/* <Widget /> */}
            </div>
        </div>
    )
}

export default HeroSection
