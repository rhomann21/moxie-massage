import React from 'react';
import '../../../App.css';
import './MassageItems.css'
import MassageItem from './MassageItem'


function Massages() {
    return (
        <><div><h1 className='massages'>Massages</h1></div>
        <div className='massages__container'>

            <div className='massages__container'>
        <div className='massages__wrapper'>
          <ul className='massages__items'>
            <MassageItem
            label='Deep Rest Massage (30 or 60 minute)'
              text='This a deeply restorative massage with medium pressure and slow, purposeful strokes. This will calm your mind, relax your muscles and refresh your soul! It is truly a tiny vacation on the table.'
            />
            </ul>
            <ul className='massages__items'>
            <MassageItem
            label='Deep Tissue (30 or 60 minute)'
              text='This is a combination of Swedish and deep tissue techniques to bring IMMEDIATE pain relief and reduce tension. It can be a relaxing massage to comfort tense muscles or it can be an intense trigger point session to break up adhesions in the tissue, depending on what you need.'
            />
          </ul>
          <ul className='massages__items'>
            <MassageItem
            label='Fix It!'
              text='Not sure what you need but you know it needs to be fixed? This appointment will cover everything from recognizing the issue, addressing the issue, the actual massage and any self care you are taught following the massage. This is for when you need more than just a general massage and require some follow up.'
            />
            </ul>          
            <ul className='massages__items'>
            <MassageItem
            label='Pain Relief'
              text='This is a combination of Swedish and deep tissue techniques to bring IMMEDIATE pain relief and reduce tension. It can be a relaxing massage to comfort tense muscles or it can be an intense trigger point session to break up adhesions in the tissue, depending on what you need.'
            />
          </ul>
          <ul className='massage_items'>
          <MassageItem
            label='Swedish Circulation'
              text='This massage is made up of deep kneading and really pushing the muscles out for a good stretch. If you sit at a desk all day, or drive a lot, or are just “stiff” this is the massage for you!'
            />
            <MassageItem
            label='Reflexology'
              text='Reflexology uses certain points or "reflex areas" on the feet and hands to connect energetically to specific organs and body parts through energy channels in the body. We put pressure on these reflex areas to remove energy blockages and promote health in the related body areas.'
            />
          </ul>
          <ul className='massage_items'>
          <MassageItem
            label='Hot Stone'
              text='Using basalt or pink Himalayan salt stones, penetrating heat from smooth stones is used to relieve pain and tension.'
            />
            <MassageItem
            label='Perfect Pregnancy '
              text='This massage is AMAZING. Relaxing Swedish strokes combined with some Thai massage on the hips. We work from ears to toes, and when you stand up you’ll wish you could stay forever! Safe, side-lying position. Seriously, after people deliver they come back requesting this massage.'
            />
          </ul>
          <ul className='massage_items'>
          <MassageItem
            label='Heather Heals'
              text='Two time winner of Best of Springfield, come see for yourself what the fuss is about. This is Heather’s signature style of 25 years of experience and all 140 modalities of massage she’s learned. With two years of medical school and 3 years of Chinese medicine under her belt, it makes for a unique and healing experience.'
            />
            <MassageItem
            label='Tui Na'
              text='This massage is AMAZING. Relaxing Swedish strokes combined with some Thai massage on the hips. We work from ears to toes, and when you stand up you’ll wish you could stay forever! Safe, side-lying position. Seriously, after people deliver they come back requesting this massage.'
            />
          </ul>
        </div>
      </div>
        </div>
        </>
    )
}

export default Massages