import React from 'react';
import './Bios.css';
import BioItem from './BioItem';
import Heather from '../../../images/Heather.jpg';
import Kayla from '../../../images/Kayla.jpg';
import Rachael from '../../../images/me.jpg';

function Bios() {
  return (
    <div className='Bios'>
      <h1>We are glad to meet you!</h1>
      <h2>Our licensed massage therapists are here and ready to help.</h2>
      <div className='bio__container'>
        <div className='bio__wrapper'>
          {/* <ul className='bio__items'>
            <BioItem
              src={Heather}
              text='Products'
              label='Products'
              path='/Products'
            />
            <BioItem
              src={Kayla}
              text='Socially distanced yoga'
              label='Yoga'
              path='/yoga'
            />
          </ul> */}
          <ul className='bio__items'>
            <BioItem
              src={Rachael}
              text='Rachael Homann'
              label='Hotstone'
              path='/services'
            />
            <BioItem
              src={Heather}
              text='Heather Fowler'
              label='Gift'
              path='/products'
            />
            <BioItem
              src={Kayla}
              text='Kayla Rowland'
              label='Loyalty'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Bios;