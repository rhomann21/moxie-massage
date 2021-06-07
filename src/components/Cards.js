import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import yogacolor from '../images/yogacolor.jpg';
import hotstone from '../images/hotstone.jpg';
import massagecolor from '../images/massagecolor.jpg';
import products2 from '../images/products2.jpg';
import oilmassage from '../images/oilmassage.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1>How can we help you today?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={products2}
              text='Check out our selection of products'
              label='Products'
              path='/Products'
            />
            <CardItem
              src={yogacolor}
              text='Socially distanced yoga'
              label='Yoga'
              path='/yoga'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={oilmassage}
              text='View our list of services'
              label='Massages'
              path='/services'
            />
            <CardItem
              src={hotstone}
              text='Looking for the perfect gift?'
              label='eGift Certificates'
              path={{pathname: "https://login.meevo.com/moxiemassage/ob?locationId=105890"}}
            />
            <CardItem
              src={massagecolor}
              text='Get perks with our membership program'
              label='Membership'
              path='/membership'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;