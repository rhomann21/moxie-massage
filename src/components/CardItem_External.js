import React from 'react';
import './Cards.css';

let egiftlink = ''


//This may work when domain is updated

// if (window.location = 'http://www.moxiemassage.com') {
//        egiftlink = 'https://na0.meevo.com/EgiftApp/home?tenantId=102988'
// }else {
//        egiftlink='https://login.meevo.com/moxiemassage/ob?locationId=105890'
// };
    

function CardItemExternal(props) {
  return (
    <>
      <li className='cards__item__external'>
        <div className='cards__item__link__external'>
          <figure className='cards__item__pic-wrap__external' data-category={props.label}>
            <a href={egiftlink}>
            <img
              className='cards__item__img__external'
              alt='Massage Image External'
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