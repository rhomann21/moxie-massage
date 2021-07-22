import React from 'react';
import '../../../App.css';
import MembershipCardItem from './MembershipCardItem';


function Membership() {
    return(
    <><div><h1 className='membership'>Membership</h1></div>
   
   <div className='membership__cards'>
      <div className='membership__intro__text'>
        {/* <h3>Introducing a new way to Moxie.</h3>
      </div>
      <div className='membership__pricing__text'>
       <h1>$80 / month</h1>  */}
      </div>
      <div className='membership__cards__container'>
        <div className='membership__cards__wrapper'>
          <ul className='membership__cards__items'>
       <MembershipCardItem
               title='Moxie Member'
               label='Tier 1'
              text='With our new membership package, one price can get you multiple benefits - treat yourself monthly with these exclusive offers:'
              text3='If interested in this beneficial bargain, please give us a call or inquire in-store.'
            /> 
       <MembershipCardItem
               title='More Moxie'
               label='Tier 2'
              text='With our new membership package, one price can get you multiple benefits - treat yourself monthly with these exclusive offers:'
              text3='If interested in this beneficial bargain, please give us a call or inquire in-store.'
            /> 
       <MembershipCardItem
               title='Master Moxie'
               label='Tier 3'
              text='With our new membership package, one price can get you multiple benefits - treat yourself monthly with these exclusive offers:'
              text3='If interested in this beneficial bargain, please give us a call or inquire in-store.'
            /> 
       <MembershipCardItem
               title='Maximum Moxie'
               label='Tier 4'
              text='With our new membership package, one price can get you multiple benefits - treat yourself monthly with these exclusive offers:'
              text3='If interested in this beneficial bargain, please give us a call or inquire in-store.'
            /> 
         </ul>
        </div>
      </div>

    <div className='membership__text__container'>
       <p>*Standard massage includes Swedish circulation, Deep Rest, Fix It, Heather Heals, Perfect Pregnancy, Pain Relief, or Hot Stone. </p>
       <p>**Add-ons include reflexology, hot towel treeatment,  </p>
       <p>An email, phone number, and credit card are required for membership sign up. </p>
    </div>
 </div>
 </>
    )}
    
export default Membership;

//Need to call meevo and ask about integrations into various website systems
//Can we sign up members online? Does it do it automatically when they log in or can the site be reached through other means