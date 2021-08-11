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
          <div>
            {/* onclick loads page specific to the id of the membership contract in the mindbody link */}
            <button className='membership__btn' onClick={() => window.location.href = `https://cart.mindbodyonline.com/sites/103021/cart/add_contract?mbo_item_id=${props.id}`}>Buy Now!</button>
          </div>
        </div>
      </li>
    </>
  );
}

export default MembershipCardItem;