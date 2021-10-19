import React, { useEffect } from 'react';
import './Bios.css';
import BioSection from './BioSection';
import HeatherBio from './HeatherBio';

function Bios() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
   <> <div className='Bios'></div>
           <BioSection />
      <div className='bio__container'>
            <HeatherBio />
      </div>
    </>
  );
}

export default Bios;