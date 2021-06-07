import React from 'react';
import '../../../App.css';
import MassageItem from './MassageItem';
import './MassageItems.css';


function Massages() {
    return (
        <><div><h1 className='massages'>Massages</h1></div>
        <div className='massages__container'>
        <div className='massages__wrapper'>
          <ul className='massages__items'>
            <MassageItem
            label='Deep Rest Massage'
            time='30 / 60 / 90 minute'
            priceText='$45 / $75 / $120'
            text='This a deeply restorative massage with medium pressure and slow, purposeful strokes. This will calm your mind, relax your muscles and refresh your soul! It is truly a tiny vacation on the table.'
            />
            </ul>
            <ul className='massages__items'>
            <MassageItem
            label='Deep Tissue Massage'
            time='30 / 60 / 90 minute'
            priceText='$45 / $100 / $130'
            text='This is a combination of Swedish and deep tissue techniques to bring IMMEDIATE pain relief and reduce tension. It can be a relaxing massage to comfort tense muscles, or it can be an intense trigger point session to break up adhesions in the tissue - it all depends on what you need.'
            />
            </ul>
            <ul className='massages__items'>
            <MassageItem
            label='Fix It! Massage'
            time='30 / 60 / 90 minute'
            priceText='$45 / $80 / $120'
            text='Not sure what you need but you know it needs to be fixed? This appointment will cover everything! From recognizing and addressing the issue, the actual massage, and any self care you are taught following the massage. This is for when you need more than just a general massage and require some follow up.'
            />
            </ul>
            <ul className='massages__items'>
            <MassageItem
            label='Pain Relief Massage'
            time='30 / 60 / 90 minute'
            priceText='$45 / $80 / $120'
            text='This is a combination of Swedish and deep tissue techniques to bring IMMEDIATE pain relief and reduce tension. It can be a relaxing massage to comfort tense muscles or it can be an intense trigger point session to break up adhesions in the tissue, depending on what you need.'
            />
            </ul>
            <ul className='massages__items'>
            <MassageItem
            label='Swedish Circulation Massage'
            time='30 / 60 / 90 minute'
            priceText='$45 / $75 / $120'
            text='This massage is made up of deep kneading and really pushing the muscles out for a good stretch. If you sit at a desk all day, or drive a lot, or are just “stiff” this is the massage for you!'
            />
            </ul>
            <ul className='massages__items'>
            <MassageItem
            label='Reflexology Massage'
            time='45 minute'
            priceText='$55'
            text='Reflexology uses certain points or "reflex areas" on the feet and hands to connect energetically to specific organs and body parts through energy channels in the body. We put pressure on these reflex areas to remove energy blockages and promote health in the related body areas.'
            />
            </ul>
            <ul className='massages__items'>
            <MassageItem
            label='Hot Stone Massage'
            time='60 / 90 minute'
            priceText='$100 / $140'
            text='Using basalt or pink Himalayan salt stones, penetrating heat from smooth stones is used to relieve pain and tension.'
            />
          </ul>
          <ul className='massages__items'>
            <MassageItem
            label='Perfect Pregnancy Massage'
            time='60 / 90 minute'
            priceText='$80 / $120'
              text='This massage is AMAZING. Relaxing Swedish strokes combined with some Thai massage on the hips. We work from ears to toes, and when you stand up you’ll wish you could stay forever! Safe, side-lying position. Seriously, after people deliver they come back requesting this massage.'
            />
            </ul>          
            <ul className='massages__items'>
            <MassageItem
            label='Heather Heals Massage'
            time='60 / 90 minute'
            priceText='$80 / $120'
              text='Two time winner of Best of Springfield, come see for yourself what the fuss is about. This is Heather’s signature style of 25 years of experience and all 140 modalities of massage she’s learned. With two years of medical school and 3 years of Chinese medicine under her belt, it makes for a unique and healing experience.'
            />
          </ul>
          <ul className='massages__items'>
            <MassageItem
            label='Tui Na Massage'
            time='60 / 90 minute'
            priceText='$100 / $120'
              text='Heather has two years of training focusing on this special skill. The main benefit of Tui Na massage is that it focuses on the specific problem, whether it is an acute or a chronic pain associated with the joints, muscles, or a skeletal system. This technique is very beneficial in reducing neck, shoulder, hip, back, arm, thigh, leg, and ankle disorders. It is a very effective therapy for arthritis, pain, sciatica, and muscle spasms.'
            />
          </ul>

        </div>
      </div>
        </>
    )
}

export default Massages