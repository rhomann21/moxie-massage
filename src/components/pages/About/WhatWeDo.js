import React from 'react';
import './WhatWeDo.css';
import '../../../App.css';
import verticalMassage from '../../../images/verthandsback.jpg';


export default function WhatWeDo() {
    return(
    <> <h1 className='wwd'>What We Do</h1>
    <div className='wwd__container'>
        <div className='wwd__text__wrapper'>
            <h1>Moxie Massage </h1>
            <h3>welcomes you to experience relaxation at its finest.</h3>
        <div className='wwd__content__wrapper'>
            <div className='wwd__pic__wrapper'>
                <img className='wwd__pic' src={verticalMassage} alt='vertMasssage'></img>
            </div>
            <div className='wwd__text'>
                <p> Moxie Massage began it’s journey 17 years ago with a dream, a hearty amount of determination, and unbelievable passion. Heather Fowler began her career ____________________. Since then, we have grown into a multi-faceted small business offering everything from adorable tote bags to beginner’s yoga classes.</p>

                <p>Moxie Massage, voted best Massage therapists in Springfield, IL - welcomes you to experience what everyone is talking about, and see for yourself what it is like to feel good again.</p>

                <p>A hidden gem, located downtown at 605 E. Washington Street, you are invited to stop in and enjoy the serene escape from your everyday stresses.</p>

                <p>Whether you are in need of Swedish Massage, Deep Tissue, Hot Stone, Tui Na, Thai, Reflexology, or Body Treatments such as our slimming seaweed and chocolate wraps, we thank you for making us your favorite place to unwind.</p>

            </div>
            </div>
        </div>
    </div>
    </>
)}