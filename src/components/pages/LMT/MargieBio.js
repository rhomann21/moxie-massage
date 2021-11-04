import React, { useEffect } from 'react';
import Margie from '../../../images/Margie.jpg';

function MargieBio() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <div className='Heather__wrapper'>
      <div className='HeatherTitleWrap'>
          <div className='HeatherOwnerWrap'>
                <h1> lmt</h1>
          </div>
          <div className='HeatherNameWrap'>
            <h3>Margie Bisbee,</h3>
          </div>
      </div>
    <div className='flexWrapBio'>
      <div className="Heather__pic__container">
              <img className='Heather__pic' src={Margie} alt='Margie'></img>
      </div>      
        <div className='Heather__bio__wrapper'>        
            <div className='Heather__bio__container'>
              <p>"20 years ago, someone asked me, 'Why don't you drop out of university to do massage? Because you're really good at it.' At the time, it never occured to me as a potential profession, it was just sometrhing I did for friends for fun. I wasn't ready for it. Several years ago, it kind of fell ito my lap when I needed it to, and I've been healing with these hands ever since."</p>
              <br />
              <p>Contact Margie directly by calling</p>
              <p>309.252.2573</p>
            </div>
        </div>
        </div>
    </div>
    </>
  );
}

export default MargieBio;
