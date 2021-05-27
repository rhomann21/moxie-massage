import React from 'react';
import './HeatherBio.css';
import Heather from '../../../images/Heather.jpg';

function HeatherBio() {
  return (
    <div className='Heather__wrapper'>
        <div className='Heather__bio__wrapper'>
            <h1>Heather Fowler</h1>
            <div className="Heather__pic__container">
              <img className='Heather__pic' src={Heather} alt='Heather'></img>
            </div>
            <div className='Heather__bio__container'>
            <p>
            Heather opened Moxie Massage in 2007 after graduating from the Saint Charles School of Massage Therapy.

            She is Licensed and Certified, and has also attended Halsa Hem and Pacifica College of Eastern Medicine in Chicago to further pursue her passion for bodywork and wellness. She is skilled at several massage and healing modalities, including Swedish, Deep Tissue, Thai Massage, Hot Stone, Tui Na, Reflexology, among other methods.

            With over ten years experience, she is in very high demand and has clients in Chicago, Springfield, and Saint Louis.

            She won the Illinois Times’ Best Massage Therapist in 2017 and has many certificates of recognition for community outreach and volunteer work.</p>
            </div>
        </div>
    </div>
  );
}

export default HeatherBio;