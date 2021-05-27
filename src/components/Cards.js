import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import yoga from '../images/yoga.jpg';
import hotstone from '../images/hotstone.jpg';
import oilmassage from '../images/oilmassage.jpg';
import products2 from '../images/products2.jpg';
import handsback from '../images/handsback.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>How can we help you today?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={products2}
              text='Products'
              label='Products'
              path='/Products'
            />
            <CardItem
              src={yoga}
              text='Socially distanced yoga'
              label='Yoga'
              path='/yoga'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={hotstone}
              text='View our list of services'
              label='Massages'
              path='/services'
            />
            <CardItem
              src={oilmassage}
              text='Looking for the perfect gift?'
              label='eGift Certificates'
              path={{pathname: "https://login.meevo.com/moxiemassage/ob?locationId=105890"}}
            />
            <CardItem
              src={handsback}
              text='Get perks with our membership program'
              label='Membership'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;