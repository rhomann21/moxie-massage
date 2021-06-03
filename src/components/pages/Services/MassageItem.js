import React from 'react';
import { Link } from 'react-router-dom';

function MassageItem(props) {
  return (
    <>
      <li className='massages__item'>
        <Link className='massages__item__link' to={props.path}>
          <figure className='massages__item__pic-wrap' data-category={props.label}>
            {/* <img
              className='massages__item__img'
              alt='Massage Image'
              src={props.src}
            /> */}
          </figure>
          <h4 className='massage__time__info'>{props.time}</h4>
          <h4 className='massage__item__pricing'>{props.priceText}</h4>
          <div className='massages__item__info'>
            <h5 className='massages__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default MassageItem;