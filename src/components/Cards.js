import React, { Component } from 'react';
import './Cards.css';
import CardItem from './CardItem';
import yogacolor from '../images/yogacolor.jpg';
import hotstone from '../images/hotstone.jpg';
import massagecolor from '../images/massagecolor.jpg';
import products2 from '../images/products2.jpg';
import oilmassage from '../images/oilmassage.jpg'
import Redirect from './egift';
import CardItemExternal from './CardItem_External';

function Cards() {
  return (
    <div className='cards'>
      <h1>How can we help you today?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {}
          <CardItem
              src={oilmassage}
              text='View our list of services'
              label='Massages'
              path='/services'
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
              src={products2}
              text='Check out our selection of products'
              label='Products'
              path='/Products'
            />
            <CardItemExternal
              src={hotstone}
              text='Looking for the perfect gift? Egift certificates now available.'
              label='eGift Certificates'
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