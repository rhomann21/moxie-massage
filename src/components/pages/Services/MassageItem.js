import React from 'react';


function MassageItem(props) {
  return (
    <>
      <li className='massages__item'>
        <div className='massages__item__card'>
          <div className='massages__item__title-wrap'>{props.label}</div>
          <h4 className='massage__time__info'>{props.time}</h4>
          <h4 className='massage__item__pricing'>{props.priceText}</h4>
          <div className='massages__item__info'>
            <h5 className='massages__item__text'>{props.text}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default MassageItem;