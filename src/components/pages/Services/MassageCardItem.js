import React from 'react';


function MassageCardItem(props) {
  return (
    <>
      <li className='massages__item'>
        <div className='massages__item__card'>
          <div className='massages__item__title-wrap'>{props.label}</div>
          <div className='massage__time__info'>{props.time}</div>
          <div className='massage__item__pricing'>{props.price}</div>
          <div className='massages__item__text'>{props.text}</div>
        </div>
      </li>
    </>
  );
}

export default MassageCardItem;