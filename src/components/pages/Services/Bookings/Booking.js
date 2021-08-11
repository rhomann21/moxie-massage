import React from 'react';
import useScript from '../../../MindbodyScript';
import './Booking.css';


const BookingWidget = props => {
  useScript('https://widgets.mindbodyonline.com/javascripts/healcode.js');
  return (
  <healcode-widget 
    data-type="appointments" 
    data-widget-partner="object" 
    data-widget-id="f688199a241" 
    data-widget-version="0" >
  </healcode-widget>

  )
}

function Booking() {
     return(
     <> <div className='booking__widget'>
         <BookingWidget></BookingWidget >
     </div>
    </>
 )}
     
export default Booking;
