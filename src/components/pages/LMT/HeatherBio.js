import React, { useEffect } from 'react';
import '../../../App.css';
import './HeatherBio.css';
import Heather from '../../../images/HeatherClose.jpg';

function HeatherBio() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <div className='Heather__wrapper'>
      <div className='HeatherTitleWrap'>
          <div className='HeatherOwnerWrap'>
                <h1> Owner</h1>
          </div>
          <div className='HeatherNameWrap'>
            <h3>Heather Fowler,</h3>
          </div>
      </div>
    <div className='flexWrapBio'>
      <div className="Heather__pic__container">
              <img className='Heather__pic' src={Heather} alt='Heather'></img>
        </div>      
        <div className='Heather__bio__wrapper'>
        
            <div className='Heather__bio__container'>
            <p>Heather opened Moxie Massage in 2007 after graduating from the Saint Charles School of Massage Therapy.</p>
            <p>She is Licensed and Certified, and has also attended Halsa Hem and Pacifica College of Eastern Medicine in Chicago to further pursue her passion for bodywork and wellness. She is skilled at several massage and healing modalities, including Swedish, Deep Tissue, Thai Massage, Hot Stone, Tui Na, Reflexology, among other methods.</p>
            <p>With over ten years experience, she is in very high demand and has clients in Chicago, Springfield, and Saint Louis.</p>
            <p>She won the Illinois Times’ Best Massage Therapist in 2017 and has many certificates of recognition for community outreach and volunteer work.</p>
            <p>Heather and her staff are proud to welcome you into Moxie Massage, where your health is priority number one. Whether it be for pain relief, relaxation, or skin care - we hope that our passion and expertise will keep you coming back for more. </p>
            </div>
        </div>
        </div>
    </div>
    </>
  );
}

export default HeatherBio;