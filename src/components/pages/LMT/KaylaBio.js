import React from 'react';
import './KaylaBio.css';
import Kayla from '../../../images/Kayla.jpg';

function KaylaBio() {
  return (
    <div className='Kayla__wrapper'>
        <div className='Kayla__bio__wrapper'>
            <h1>Kayla Rowland</h1>
            <div className="Kayla__pic__container">
              <img className='Kayla__pic' src={Kayla} alt='kayla'></img>
            </div>
            <div className='Kayla_bio__container'>
            <p>
            Kayla has been with Moxie Massage since 2016, and graduated from USCA in Springfield, IL.

            She specializes in deep tissue and skin care, and will be graduating from esthetics class in December of 2018!</p>
            </div>
        </div>
    </div>
  );
}

export default KaylaBio;