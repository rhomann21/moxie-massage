import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>How can we help?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../images/products.jpg'
              text='Products'
              label='Products'
              path='/Products'
            />
            <CardItem
              src='../images/yoga.jpg'
              text='Socially distanced yoga'
              label='Yoga'
              path='/yoga'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='../images/hotstone.jpg'
              text='Try out our luxurious hot stone massage'
              label='Hotstone'
              path='/services'
            />
            <CardItem
              src='../images/oilmassage.jpg'
              text='Looking for the perfect gift?'
              label='Gift'
              path='/products'
            />
            <CardItem
              src='../images/products.jpg'
              text='Sign up for our loyalty program'
              label='Loyalty'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;