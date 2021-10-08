import React, { useEffect } from 'react';
import './Legal.css';


function ADAPolicy() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (

    <div className='adapolicy'><h3>ADA Compliance</h3>
      <div className='ada__container'>
        <div className='commitment__container'>
            <h4>Our commitment to you:</h4>
            <p>Moxie Massage is committed to facilitating the accessibility and usability of its website, www.moxiemassage.com, for all people. To that end, Moxie Massage is in the process of implementing functional improvements to www.moxiemassage.com consistent 
                 relevant portions of the World Wide Web Consortium's Web Content Accessibility Guidelines 2.1 Level AA ("WCAG 2.1 AA"). 
                You can find additional information about WCAG 2.1 AA here: WCAG 2.1 AA.</p>
        </div>
        <div className='ada__contact__container'>
            <h4>Contact us</h4>
            <p>Our efforts are ongoing - if you have any questions or concerns, please email us at moxiemassagespringfield@gmail.com</p>
        </div>
      </div>
    </div>

  );
};

export default ADAPolicy;



