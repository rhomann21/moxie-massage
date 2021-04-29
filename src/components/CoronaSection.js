import React from 'react';
import './CoronaSection.css';
import { Link } from 'react-router-dom';
import mask from '../images/mask.jpg'

function CoronaSection() {
  return (
    <div className='corona-container'>
        <h1>HERE'S HOW WE ARE KEEPING YOU SAFE</h1>
        <p>Moxie massage is doing our part to provide a clean and healthy environment.
          <div className='mask-img-container'>
            <img className='mask-img' src={mask} />
          </div>
          <div className='corona-text-wrap'>
            <ul>
             <li>All staff are fully vaccinated.</li>
             <li>Masks wearing is enforced.</li>
             <li>Surfaces are regularly and throroughly cleaned.</li>
             </ul>
          </div>
        </p>
    </div>
  );
}

export default CoronaSection;