import React from 'react';
import { Link } from 'react-router-dom';

function BioItem(props) {
  return (
    <>
      <li className='bio__item'>
        <div className='bio__item__link'>
        <div className='bio__item__info'>
            <h5 className='bio__item__text'>{props.text}</h5>
          </div>
          <figure className='bio__item__pic-wrap' data-category={props.label}>
            <img
              className='bio__item__img'
              alt='BioPic'
              src={props.src}
            />
          </figure>
        </div>
      </li>
    </>
  );
}

export default BioItem;