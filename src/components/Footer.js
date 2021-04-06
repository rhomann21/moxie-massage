import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button'
import './Footer.css';

function FooterSection() {
    return(
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='foot-subscription-heading'>
                    Join our loyalty program for monthly blah blahblah
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Your Email' className='footer-input' />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                </div>
            </div>
        </div>
     

    )
}

export default FooterSection



            {/* one row 3 or 4 columns
            
            What we need in footer:
                links to pages
                copyright
                contact
                services
                socail media
                legal
                ccpa
                ada
                hippa
                terms and conditions
                privacy policy */}