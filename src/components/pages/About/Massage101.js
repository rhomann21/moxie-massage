import React, { useEffect } from 'react';
import '../../../App.css';


export default function WhatWeDo()

{

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  
    return (
      <><div><h1 className='massage101'>Massage 101</h1></div>
      <div className='wwdMainWrapper'>
        <div className='wwdTitleWrap'>
            <div className='m101HeadlineWrap'>
              <h3>Here's how massage</h3>
            </div>
            <div className='wwdWelcomeWrap'>
                <h1> can help you</h1>
            </div>
        </div>
        <div className='m101Wrapper'>
            <div className='m101PContainer'>
            <p>Massage has many physical, mental, and emotional benefits and here at Moxie, we strive to give you the full beneficial experience. 
            It is increasingly being offered along with standard medical treatments for a wide variety of conditions and situations. We are here to help with anything that we can! 
            According to the Mayo Clinic, massage benefits can include:</p>
        <div className='massage101__list__wrapper'>
            <ul>
                <li> Reducing stress and increasing relaxation</li>
                <li> Reducing pain and muscle soreness and tension</li>
                <li> Improving circulation, energy and alertness</li>
                <li> Lowering heart rate and blood pressure</li>
                <li> Improving immune function</li>
                <br />
            </ul>
        </div>
     <p>It has also been shown in studies that massage can help the following:</p>
     <div className='massage101__list__wrapper'>
            <ul>
                <li> Anxiety</li>
                <li> Insomnia realted to stress</li>
                <li> Digestive disorders</li>
                <li> Fibromyalgia</li>
                <li> Headaches</li>
                <li> Myofascial pain syndrome</li>
                <li> Nerve Pain</li>
                <li> Soft tissue strains or injuries, sport injuries</li>
            </ul>
        </div>
        </div>
        <p className ='m101Closing'>Whether you're looking for a relaxing escape or help with that pesky old shoulder injury, Moxie is here to make you feel your absolute best. 
            Book with us today! ...don't you deserve to feel good?</p>
        </div>
        </div>
    </>
    );
  }

