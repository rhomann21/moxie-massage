import React from 'react';
import '../../../App.css';
import MassageCardItem from './MassageCardItem';
// import { Button } from '../../Button';


function BodyTreatments() {
    return (
        <><div><h1 className='bodytreatments'>Facials </h1></div>
        <div className='massages__container'>
        <div className='massages__wrapper'>
          <ul className='massages__items'>
            <MassageCardItem
            title='Moxacious Moxie Facial'
            time1='60 Minute : '
            price1='$85'
            text='Acupressure is the word with this award winning massage-based facial! Massage, massage, massage! We start with a hot towels with azulene and honey oil, followed by an exfoliating scrub and serum, a hydrating and firming mask, an acupressure session to lift and relax overworked muscles in the mouth and behind the eyes, and complete with a finishing balm and eye serum. Scalp massage included per request. This DOES include hand and foot reflexology.'
            />
            </ul>
            <ul className='massages__items'>
            <MassageCardItem
            title='Mini Facial with Hand and Foot Massage'
            time1='30 Minute : '
            price1='$55'
            text='Give yourself a small vacation with our mini facial! Includes a hand and foot massage for tired paws - perfect for pre/post surgery or jet lag.'
            />
            </ul>
      
        </div>
      </div>
        </>
    )
}

export default BodyTreatments