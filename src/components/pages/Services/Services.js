import React, { useEffect } from 'react';
import '../../../App.css';
import '../../Cards.css';
import CardItem from '../../CardItem';
import facial from '../../../images/facial.jpg';
import massagecolor from '../../../images/massagecolor.jpg';
import yoga2 from '../../../images/yoga2.jpg';

function Services() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

     return(
     <><div><h1 className='services'>Services</h1></div>
    
    <div className='cards'>
    <div className='cards__container'>
      <div className='cards__wrapper'>
        <ul className='cards__items'>
          <CardItem
            src={massagecolor}
            text='Massages'
            label='Massages'
            path='/Massages'
          />
          <CardItem
            src={yoga2}
            text='Yoga'
            label='Yoga'
            path='/yoga'
          />
          <CardItem
            src={facial}
            text='Body Treatments - coming soon!'
            label='Treatments'
            // path=''
          />
        </ul>
      </div>
    </div>
  </div>
  </>
     )}
     
export default Services;