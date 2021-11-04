import React, { useEffect } from 'react';
import Kendra from '../../../images/KendraClose.jpg';

function KendraBio() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <div className='Heather__wrapper'>
      <div className='HeatherTitleWrap'>
          <div className='HeatherOwnerWrap'>
                <h1> lmt</h1>
          </div>
          <div className='HeatherNameWrap'>
            <h3>Kendra Waide,</h3>
          </div>
      </div>
      <div className='flexWrapBio'>
      <div className="Heather__pic__container">
              <img className='Heather__pic' src={Kendra} alt='Kendra'></img>
      </div>
        <div className='Heather__bio__wrapper'>
            <div className='Heather__bio__container'>
              <p>Kendra became licensed in 2019 after graduating from Lincoln Land
              Community College - Capital City Training Center and becoming
              Certified in Myofascial Release by Holly Pinto of The Body Therapy
              Center and School of Massage in Swansea IL. </p>
              <p> Kendra has practiced the Japanese healing technique known as Reiki since 2015 and has earned
              the title of Reiki Master. She really loves to connect and help people
              and is excited to be part of Moxie Massage!</p>
              <br />
              <p>Contact Kendra directly by calling</p>
              <p>217.652.8157</p>
            </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default KendraBio;
