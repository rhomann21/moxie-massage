import React, { useEffect } from 'react';
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
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    return(
    <><div><h1 className='membership'>Membership</h1></div>
   
   <div className='membership__cards'>
      <div className='membership__intro__text'>
     <p> One low monthly fee can get you an all access pass to massage, yoga, and our goodies in store. Let's get real - don't you deserve to feel</p>
     <h1>good?</h1>
      </div>
      <div className='membership__text__container'>
       <p>Due to our scheduling software, memberships are currently not available to be purchase online. Please see us in store or give us a call to sign up today!</p>
       <br />
       <p>An email, phone number, and credit card are required for membership sign up. </p>
    </div>
      <div className='membership__cards__container'>
        <div className='membership__cards__wrapper'>
          <ul className='membership__cards__items'>
            <MembershipCardItem
               title='Moxie Member'
               label='Tier 1 - $80/month'
              text='Option 1: 1 hour Swedish massage'
              text2='Option 2: 1 hour deep tissue massage'
            />           
       <MembershipCardItem         
               title='More Moxie'
               label='Tier 2 - $100/month'
              text='Option 1: 1 hour Deep Rest massage + 1 yoga class + 10% off product.'
              text2='Option 2: 1 hour Tui Na (Fix It) massage + 1 yoga class + 10% off product.'

            /> 
       <MembershipCardItem
               title='Moxie Master'
               label='Tier 3 - $120/month'
              text='Option 1: 90 min Swedish massage + 1 yoga class OR 10% off product.'
              text2='Option 2: 90 min Deep Tissue massage + 1 yoga class OR 10% off.'
            /> 
       <MembershipCardItem
               title='Maximum Moxie'
               label='Tier 4 - $140/month'
              text='Option 1: 1 hour Swedish massage + Moxie facial OR cupping OR 20% off.'
              text2='Option 2: 1 hour Deep Tissue + Moxie facial OR cupping OR 20% off.'
            /> 
         </ul>
        </div>
      </div>


 </div>
 </>
    )}
    
export default Membership;

//Need to call meevo and ask about integrations into various website systems
//Can we sign up members online? Does it do it automatically when they log in or can the site be reached through other means