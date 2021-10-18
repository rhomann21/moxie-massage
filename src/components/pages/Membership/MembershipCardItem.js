import React from 'react';
import './MembershipCard.css';
import '../../Button.css';

function MembershipCardItem(props) {
  return (
    <>
      <li className='membership__cards__item'>
        <div className='membership__cards__item__link'>
          <span className='membership__cards__item__title' data-category={props.title}>
          </span>
          <div className='membership__cards__item__tier'>{props.label}</div>
          <div>
            <h5 className='membership__cards__item__text'>{props.text}</h5>
          </div>
          <div>
            <h5 className='membership__cards__item__text2'>{props.text2}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default MembershipCardItem;