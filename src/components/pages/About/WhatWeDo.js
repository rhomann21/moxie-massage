import React, { useEffect } from 'react';
import '../../../App.css';


export default function WhatWeDo()

{

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  
    return (
      <><div><h1 className='wwd'>What We Do </h1></div>
      {/* <div className='wwdMainWrapper'> */}
        <div className='wwdTitleWrap'>
            <div className='moxMassageWrap'>
              <h3>Moxie Massage</h3>
            </div>
            <div className='wwdWelcomeWrap'>
                <h1> Welcomes you</h1>
            </div>
        </div>
        <div className='wwdWrapper'>
            <div className='wwdPContainer'>
                <p> Moxie Massage began its journey 17 years ago with a dream, a hearty amount of determination, and unbelievable passion. Since then, we have grown into a multi-faceted small business offering everything from adorable tote bags to beginner’s yoga classes.</p>

                <p>Moxie Massage, voted best Massage therapists in Springfield, IL - welcomes you to experience what everyone is talking about, and see for yourself what it is like to feel good again.</p>

                <p>A hidden gem, located downtown at 605 E. Washington Street, you are invited to stop in and enjoy the serene escape from your everyday stresses.</p>

                <p>Whether you are in need of Swedish Massage, Deep Tissue, Hot Stone, Tui Na, Thai, Reflexology, or Body Treatments such as our slimming seaweed and chocolate wraps, we thank you for making us your favorite place to unwind.</p>
            </div>
        {/* </div> */}
        </div>
      </>
    );
  }

