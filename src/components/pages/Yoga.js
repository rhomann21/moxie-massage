import React from 'react';
import { useEffect } from 'react';
import MembershipCardItem from './Membership/MembershipCardItem';
import '../../App.css';


function Yoga() {


    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  
    return(
    <><div><h1 className='yoga'>Yoga</h1></div>
   
   <div className='membership__cards'>
      <div className='membership__intro__text'>
     <p> Now introducing Moxie Yoga! Beginner's classes are now available online or in studio at our Spa. No judgement, no pressure - just a good stretch and a great time.</p>
      </div>
      <div className='membership__cards__container'>
        <div className='membership__cards__wrapper'>
          <ul className='membership__cards__items'>
            <MembershipCardItem
               title='In Studio'
               label='$15 per session'
              text='Option 1: 1 hour Swedish massage + 1 yoga class.'
              text2='Option 2: 1 hour deep tissue massage  + 1 yoga class.'
            //   id is from mindbosy in booking url link (last three numbers)
              id='100116'
            />           
       <MembershipCardItem         
               title='Online Option'
               label='$10 per session'
              text='Option 1: 1 hour Deep Rest massage + 1 yoga class + 10% off product.'
              text2='Option 2: 1 hour Tui Na (Fix It) massage + 1 yoga class + 10% off product.'
              id='102'
            /> 
         </ul>
        </div>
      </div>

 </div>
 </>
    )}
    
export default Yoga;

