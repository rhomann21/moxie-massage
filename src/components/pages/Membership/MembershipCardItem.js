import React from 'react';

import './MembershipCard.css';

function MembershipCardItem(props) {
  return (
    <>
      <li className='membership__cards__item'>
        <figure className='membership__cards__item__link' to={props.path}>
          <figure className='membership__cards__item__pic-wrap' data-category={props.title}>
            <span className='membership__cards__item__label' label={props.label}></span>
          </figure>
          <div className='membership__cards__item__info'>
          </div>
          <div>
            <h5 className='membership__cards__item__text'>{props.text}</h5>
          </div>
        </figure>
      </li>
    </>
  );
}

export default MembershipCardItem;