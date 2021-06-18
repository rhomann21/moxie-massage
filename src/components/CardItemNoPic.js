import React from 'react';
import './pages/Services/MassageItems.css'

function CardNoPicItem(props) {
  return (
    <>
      <li className='massages__item'>
        <div className='massages__item__link'>
          <h4 className='massage__time__info'>{props.info}</h4>
          <h4 className='massage__item__pricing__membership'>{props.priceTextMember}</h4>
          <div className='massages__item__info'>
            <h5 className='massages__item__text'>{props.text}</h5>
            <h5 className='massages__item__text__2'>{props.text2}</h5>
            <h5 className='massages__item__text__3'>{props.text3}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardNoPicItem;