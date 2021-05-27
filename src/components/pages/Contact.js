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
               <Button
                classname='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--lrg'
                onClick={{pathname: "tel:+12176794337"}} 
                > 
                Give us a call
                <i className='fa fa-phone' />
                </Button>
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
    </div>
    </>
     )}
     
export default Contact;

//Make sure to link this page and other exsting pages into the footer 