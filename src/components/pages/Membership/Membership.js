import React from 'react';
import '../../../App.css';
import MembershipCardItem from './MembershipCardItem';
// import useScript from '../../MindbodyScript'; 

// const TierOneLink = props => {
//   useScript('https://widgets.mindbodyonline.com/javascripts/healcode.js');
//   return (
//     <healcode-widget data-version="0.2" 
//       data-link-class="healcode-contract-text-link" 
//       data-site-id="103021" 
//       data-mb-site-id="5721772" 
//       data-bw-identity-site="false" 
//       data-type="contract-link" 
//       data-inner-html="Buy Now!" 
//       data-service-id="101" />
//   )
// }

// let tierOneUrl = window.location.href = 'https://cart.mindbodyonline.com/sites/103021/cart/add_contract?mbo_item_id=101';
// let tierTwoUrl =  window.location.href = 'https://cart.mindbodyonline.com/sites/103021/cart/add_contract?mbo_item_id=102';



function Membership() {
    return(
    <><div><h1 className='membership'>Membership</h1></div>
   
   <div className='membership__cards'>
      <div className='membership__intro__text'>
     <p> One low monthly fee can get you an all access pass to massage, yoga, and our goodies in store. Let's get real - don't you deserve to feel</p>
     <h1>good?</h1>
      </div>
      <div className='membership__cards__container'>
        <div className='membership__cards__wrapper'>
          <ul className='membership__cards__items'>
       <MembershipCardItem
               title='Moxie Member'
               label='Tier 1'
              text='Option 1: 1 hour Swedish massage + 1 yoga class.'
              text2='Option 2: 1 hour deep tissue massage  + 1 yoga class.'
              id='101'
              // id is taken from mindbody url/link

            />           
       <MembershipCardItem         
               title='More Moxie'
               label='Tier 2'
              text='Option 1: 1 hour Deep Rest massage + 1 yoga class + 10% off product.'
              text2='Option 2: 1 hour Tui Na (Fix It) massage + 1 yoga class + 10% off product.'
              id='102'

            /> 
       <MembershipCardItem
               title='Moxie Master'
               label='Tier 3'
              text='Option 1: 90 min Swedish massage + 1 yoga class OR 10% off product.'
              text2='Option 2: 90 min Deep Tissue massage + 1 yoga class OR 10% off.'
            /> 
       <MembershipCardItem
               title='Maximum Moxie'
               label='Tier 4'
              text='Option 1: 1 hour Swedish massage + facial OR cupping OR 20% off.'
              text2='Option 2: 1 hour Deep Tissue + facial OR cupping OR 20% off.'
            /> 
         </ul>
        </div>
      </div>

    <div className='membership__text__container'>
       <p>An email, phone number, and credit card are required for membership sign up. </p>
    </div>
 </div>
 </>
    )}
    
export default Membership;

//Need to call meevo and ask about integrations into various website systems
//Can we sign up members online? Does it do it automatically when they log in or can the site be reached through other means