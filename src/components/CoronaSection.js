
import React from 'react';
import './CoronaSection.css';
import mask from '../images/mask.jpg'


function CoronaSection() {
  return (
    <div className='corona'>
      <h1>Here's how we're keeping everyone safe:</h1>
      <div className='corona__container'>
        <div className='corona__wrapper'>
          <h3> Staff is following current CDC guidelines. <br></br>
            All staff have been fully vaccinated and will wear masks if the client is not fully vaccinated or feels uncomfortable in an unmasked environment.<br></br>
            Clients may be unmasked ONLY if they are fully vaccinated. Persons will not exceed 12 people in the shop at once.<br></br>
            Temperature checks are performed upon entry.<br></br>
            If you feel ill or have been exposed to anyone who has been disgnosed with COVID-19, please stay home and reschedule. We will be more than happy to accomodate you! </h3>
          </div>
       </div>
    </div>
  );
}

export default CoronaSection;