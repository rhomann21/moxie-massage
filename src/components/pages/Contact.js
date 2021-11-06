import React, { useEffect } from 'react';
import '../../App.css';
import { Button } from '../Button';



function Contact() {

     useEffect(() => {
          window.scrollTo(0, 0)
        }, [])

     return(
     <><div><h1 className='contact'>Contact Us</h1></div>
          <div className='contact__wrapper'> 
               <div className='contact__buttons__wrapper'>
                    <div className='contact__buttons'>
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
                    <div className='contact__buttons'>
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
               <div className='contact__buttons'>
                    <Button
                    classname='btns' 
                    buttonStyle='btn--outline' 
                    buttonSize='btn--lrg'
                    onClick={{pathname: "https://goo.gl/maps/v6RkGJqayH9S65V16"}} 
                    > 
                    Google Maps   
                    <i className='fa fa-google' />
                    </Button>
               </div>
          </div>
     </div>
    </>
 )}
     
export default Contact;
