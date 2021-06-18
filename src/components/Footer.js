import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our loyalty program for discounts, freebies, and more.
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> */}
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            {/* Need to make an about page */}
            {/* Need to make all these pages actually bleh */}
            <Link to='/'>What We Do</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Massage 101</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <a href= "mailto:your@email.address?subject=What's on your mind?">Email</a>
            <Link to='/'>605 E. Washington</Link>
            <Link to='/'>Springfield, IL</Link>
            <Link to='/'>62701</Link>    
            <a href="tel:+12176794337">217.679.4337</a>
            {/* look up how to embedd google map location key into a link */}
            <Link to='/contact'>Map</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Who We Are</h2>
            <Link to='/HeatherBio'>Heather Fowler</Link>
            <Link to='/KendraBio'>Kendra Waide</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Legal Stuff</h2>
            <Link to='/termsofservice'>Terms of Service</Link>
            <Link to='/privacypolicy'>Privacy Policy</Link>
            <Link to='/'>Licensing</Link>
            <Link to='/adapolicy'>ADA</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>

          <small class='website-rights'>Moxie Massage © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to={{pathname: 'https://www.facebook.com/MoxieBacktini/'}}
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to={{pathname: 'https://www.instagram.com/moxiemassage/?hl=en'}}
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;