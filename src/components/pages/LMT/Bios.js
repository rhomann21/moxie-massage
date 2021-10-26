import React, { useEffect } from 'react';
import './Bios.css';
import BioSection from './BioSection';
import HeatherBio from './HeatherBio';
import KendraBio from './KendraBio';
import MargieBio from './MargieBio';

function Bios() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
   <> <div className='Bios'></div>
           <BioSection />
      <div className='bio__container'>
            <HeatherBio />
            <KendraBio />
            <MargieBio />
      </div>
    </>
  );
}

export default Bios;