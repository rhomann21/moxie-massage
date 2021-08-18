import React from 'react';


function MassageCardItem(props) {
  return (
    <>
      <li className='massages__item'>
        <div className='massages__item__card'>
          <div className='massages__item__title__wrap'>{props.title}</div>
          <div className='massage__item__pricing'>{props.price}</div>
          <div className='massages__item__text'>{props.text}</div>
          <div className='massage__time__info'>
            <select className='time__dropdown'>
                <option selected value='time'>Select a time</option>
                <option value='time_30'>{props.time1}</option>
                <option value='time_60'>{props.time2}</option>
                <option value='time_90'>{props.time3}</option>
            </select>
          </div>
        </div>
      </li>
    </>
  );
}

export default MassageCardItem;