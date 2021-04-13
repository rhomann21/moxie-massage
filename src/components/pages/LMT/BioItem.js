import React from 'react';
import { Link } from 'react-router-dom';

function BioItem(props) {
  return (
    <>
      <li className='bio__item'>
        <Link className='bio__item__link' to={props.path}>
          <figure className='bio__item__pic-wrap' data-category={props.label}>
            <img
              className='bio__item__img'
              alt='LMT Image'
              src={props.src}
            />
          </figure>
          <div className='bio__item__info'>
            <h5 className='bio__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default BioItem;