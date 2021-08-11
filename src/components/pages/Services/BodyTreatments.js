import React from 'react';
import '../../../App.css';
import './MassageItems.css';
import MassageCardItem from './MassageCardItem';
// import { Button } from '../../Button';


function BodyTreatments() {
    return (
        <><div><h1 className='bodytreatments'>Body Treatments</h1></div>
        <div className='massages__container'>
        <div className='massages__wrapper'>
          <ul className='massages__items'>
            <MassageCardItem
            label='Moxalicious Facial'
            time='60 minute'
            priceText='$80'
            text='Acupressure is the word with this award winning massage-based facial! Massage, massage, massage! We start with a hot towels with azulene and honey oil, followed by an exfoliating scrub and serum, a hydrating and firming mask, an acupressure session to lift and relax overworked muscles in the mouth and behind the eyes, and complete with a finishing balm and eye serum. Scalp massage included per request. This DOES include hand and foot reflexology.'
            />
            </ul>
            <ul className='massages__items'>
            <MassageCardItem
            label='Moxalicious Mini Facial'
            time='35 minute'
            priceText='$55'
            text='Give yourself a small vacation with our mini facial! Includes a hand and foot massage for tired paws - perfect for pre/post surgery or jet lag.'
            />
            </ul>
            <ul className='massages__items'>
            <MassageCardItem
            label='Seaweed Body Wrap'
            time='30 / 60 / 90 minute'
            priceText='$45 / $100 / $130'
            text='This is a combination of Swedish and deep tissue techniques to bring IMMEDIATE pain relief and reduce tension. It can be a relaxing massage to comfort tense muscles or it can be an intense trigger point session to break up adhesions in the tissue, depending on what you need.'
            />
            </ul>
        
        </div>
      </div>
        </>
    )
}

export default BodyTreatments