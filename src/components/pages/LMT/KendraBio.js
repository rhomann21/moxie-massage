import React from 'react';
import './KendraBio.css';
import Kendra from '../../../images/Kendra.jpg';

function KendraBio() {
  return (
    <div className='Kendra__wrapper'>
        <div className='Kendra__bio__wrapper'>
            <h1>Kendra Waide</h1>
            <div className='Kendra__pic__container'>
              <img className='Kendra__pic' src={Kendra} alt='kendra'></img>
            </div>
            <div className='Kendra__bio__container'>
            <p>
            Kendra became licensed in 2019 after graduating from Lincoln Land
Community College - Capital City Training Center and becoming
Certified in Myofascial Release by Holly Pinto of The Body Therapy
Center and School of Massage in Swansea IL. Kendra has practiced the
Japanese healing technique known as Reiki since 2015 and has earned
the title of Reiki Master. She really loves to connect and help people
and is excited to be part of Moxie Massage!
</p>
            </div>
        </div>
    </div>
  );
}

export default KendraBio;