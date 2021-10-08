import React from 'react';
import './Bios.css';
import BioItem from './BioItem';
import Heather from '../../../images/Heather.jpg';
import Kendra from '../../../images/Kendra.jpg';

function Bios() {
  return (
   <> <div className='Bios'>
      <h1>We are glad to meet you!</h1>
    </div>
      <div className='bio__container'>
        {/* <div className='bio__wrapper'> */}
          <ul className='bio__items'>
          <BioItem
              src={Heather}
              text='Heather Fowler, Owner'
              label='Heather'
              path='/HeatherBio'
            />
          </ul>
          <ul className='bio__items'>
          <BioItem
              src={Kendra}
              text='Kendra Waide, LMT'
              label='Kendra'
              path='/KendraBio'
            />

          </ul>
        {/* </div> */}
      </div>
    </>
  );
}

export default Bios;