import React from 'react';
import { useEffect } from 'react';
import '../../../App.css';
import './Massage101.css';  

export default function Massage101() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
    <> <h1 className='massage101'>Massage 101</h1>
    <div className='massage101__container'>
        <div className='massage101__p__wrap'>
        <p>Massage has many physical, mental, and emotional benefits and here at Moxie, we strive to give you the full beneficial experience. 
            It is increasingly being offered along with standard medical treatments for a wide variety of conditions and situations. We are here to help with anything that we can! 
            According to the Mayo Clinic, massage benefits can include:</p>
            <div className='massage101__list__wrapper'>
                <ol>- Reducing stress and increasing relaxation</ol>
                <ol>- Reducing pain and muscle soreness and tension</ol>
                <ol>- Improving circulation, energy and alertness</ol>
                <ol>- Lowering heart rate and blood pressure</ol>
                <ol>- Improving immune function</ol>
            </div>
        <p>It has also been shown in studies that massage can help the following:</p>
        <div className='massage101__list__wrapper'>
            <ol>- Anxiety</ol>
            <ol>- Digestive disorders</ol>
            <ol>- Fibromyalgia</ol>
            <ol>- Headaches</ol>
            <ol>- Insomnia related to stress</ol>
            <ol>- Myofascial pain syndrome</ol>
            <ol>- Nerve pain</ol>
            <ol>- Soft tissue strains or injuries</ol>
            <ol>- Sports injuries</ol>
            <ol>- Temporomandibular joint pain</ol>
        </div>
            <p>Whether you're looking for a relaxing escape or help with that old pesky shoulder injury, Moxie is here to make you feel your absolute best. 
            Book with us today! ...don't you deserve to feel good?</p>
        </div>    

    </div>
    </>
)}