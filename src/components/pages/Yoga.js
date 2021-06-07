import React from 'react';
import '../../App.css';
import './Yoga.css';

function yoga() {
  return (
     <div className='yoga__page__wrapper'> 
        <div className='yoga'>
            <h1>Yoga</h1>
        </div>
        <div className='yoga__text__wrapper'>
            <p className='yoga__text'>
                This is where the yoga blurb will go. We need to include times and dates - are the classes every weekend or every other? Once a month? 
                Customers will book classes by calling - we cannoit do it any other way with MEevo unfortunately. 
                Max 8 people.
                Describe the studio? How many square feet? 
                Do customers need to bring all their own equiptment? Will we have rental mats?
                Huzzah!
            </p>
        </div>
    </div>
  );
}

export default yoga;