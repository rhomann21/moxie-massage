import React from 'react';
import './Bios.css';
import BioItem from './BioItem';
import Heather from '../../../images/Heather.jpg';
import Kayla from '../../../images/Kayla.jpg';
import Kendra from '../../../images/Kendra.jpg';

function Bios() {
  return (
    <div className='Bios'>
      <h1>We are glad to meet you!</h1>
      <h2>Our licensed massage therapists are here and ready to help.</h2>
      <div className='bio__container'>
        <div className='bio__wrapper'>
          <ul className='bio__items'>
            <BioItem
              src={Kendra}
              text='Kendra Waide'
              label='Kendra'
              path='/KendraBio'
            />
            <BioItem
              src={Heather}
              text='Heather Fowler'
              label='Heather'
              path='/HeatherBio'
            />
            <BioItem
              src={Kayla}
              text='Kayla Rowland'
              label='Kayla'
              path='/KaylaBio'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Bios;