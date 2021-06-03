import React from 'react';
import '../../App.css';
import './Contact.css';
import { Button } from '../Button';


//embed the google map feature
//Check out contact pages of other massage websites

function Contact() {
     return(
     <><div><h1 className='contact'>Contact Us</h1></div>
          <div className='contact__wrapper'> 

         <div className='contact__buttons__wrapper'>
              <div className='phone__wrapper'>
               <Button
                classname='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--lrg'
                onClick={{pathname: "tel:+12176794337"}} 
                > 
                Give us a call
                <i className='fa fa-phone' />
                </Button>
               </div>
               <div className='email__wrapper'>
                <Button
                classname='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--lrg'
                onClick={{pathname: "mailto:your@email.address?subject=What's on your mind?"}} 
                > 
                Email Us   
                <i className='fa fa-envelope' />
                </Button>
                </div>
          <div className='google__maps'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.2312203676183!2d-89.6497279847621!3d39.801804979441386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887539c3ea0b862b%3A0xf6c96bd84765e1f6!2s605%20E%20Washington%20St%2C%20Springfield%2C%20IL%2062701!5e0!3m2!1sen!2sus!4v1622654819973!5m2!1sen!2sus" 
          width="600" 
          height="450"
          allowfullscreen="" 
          loading="lazy">
          </iframe>
          </div>
         </div>
    </div>
    </>
     )}
     
export default Contact;

//Make sure to link this page and other exsting pages into the footer 