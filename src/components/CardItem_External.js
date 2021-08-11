import React from 'react';
import './Cards.css';


function CardItemExternal(props) {
  return (
    <>
      <li className='cards__item__external'>
        <div className='cards__item__link__external'>
          <figure className='cards__item__pic-wrap__external' data-category={props.label}>
            <a href='https://cart.mindbodyonline.com/sites/103021/cart/gift_cards/add?mbo_id=10004'>
            <img
              className='cards__item__img__external'
              alt='Massage External'
              src={props.src}
            />
            </a>
          </figure>
          <div className='cards__item__info__external'>
            <h5 className='cards__item__text__external'>{props.text}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItemExternal;