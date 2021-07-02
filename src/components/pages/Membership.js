import React from 'react';
import '../../App.css';
import CardNoPicItem from '../CardItemNoPic';


function Membership() {
    return(
    <><div><h1 className='membership'>Membership</h1></div>
   
   <div className='membership__container'>
      <div className='membership__intro__text'>
        <h3>Introducing a new way to Moxie.</h3>
      </div>
      <div className='membership__pricing__text'>
       <h1>$80 / month</h1> 
      </div>
       <CardNoPicItem
               priceTextMember='Moxie Massage Monthly Memberships '
              text='With our new membership package, one price can get you multiple benefits - treat yourself monthly with these exclusive offers:'
              text2='Members get one 75 minute standard massage with their choice of 15 minute add-on. Feel like bringing the spa home after? Enjoy 10% off all product as well!'
              text3='If interested in this beneficial bargain, please give us a call or inquire in store.'
            /> 

    <div className='membership__text__container'>
       <p>*Standard massage includes Swedish circulation, Deep Rest, Fix It, Heather Heals, Perfect Pregnancy, Pain Relief, or Hot Stone. </p>
       <p>**Add-ons include reflexology, how towel treeatment </p>
       <p>An email, phone number, and credit card are required for membership sign up. </p>
    </div>
 </div>
 </>
    )}
    
export default Membership;

//Need to call meevo and ask about integrations into various website systems
//Can we sign up members online? Does it do it automatically when they log in or can the site be reached through other means