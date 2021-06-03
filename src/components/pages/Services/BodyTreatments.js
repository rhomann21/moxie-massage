import React from 'react';
import '../../../App.css';
import './MassageItems.css';
import MassageItem from './MassageItem';
import { Button } from '../../Button';


function BodyTreatments() {
    return (
        <><div><h1 className='bodytreatments'>Body Treatments</h1></div>
        <div className='bodytreatments__container'>
        <div className='bodytreatments__wrapper'>
          <ul className='massages__items'>
            <MassageItem
            label='Moxalicious Facial'
            time='30 / 60 / 90 minute'
            priceText='$45 / $75 / $120'
            text='This a deeply restorative massage with medium pressure and slow, purposeful strokes. This will calm your mind, relax your muscles and refresh your soul! It is truly a tiny vacation on the table.'
            />
            </ul>
            <ul className='massages__items'>
            <MassageItem
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