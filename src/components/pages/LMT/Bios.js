import React from 'react';
import './Bios.css';
import BioItem from './BioItem';
import Heather from '../../../images/Heather.jpg'
import Kayla from '../../../images/Kayla.jpg'


function Bios() {
  return (
    <div className='Bio'>
      <h1>Meet our therapists</h1>
      <div className='bio__container'>
        <div className='bio__wrapper'>
          <ul className='bio__items'>
            <BioItem
              src={Heather}
              text='Heather Fowler'
              label='Heather'
              path='/heather'
            />
            <BioItem
              src={Kayla}
              text='Kayle Rowland'
              label='Kayla'
              path='/kayla'
            />
            {/* <BioItem
              src={hotstone}
              text='Try out our luxurious hot stone massage'
              label='Hotstone'
              path='/services'
            /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Bios;