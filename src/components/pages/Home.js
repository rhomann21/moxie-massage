import React, { useEffect } from 'react'
import '../../App.css';
import HeroSection from '../HeroSection.js';
import Cards from '../Cards';
import CoronaSection from '../CoronaSection';
//import FooterSection from '../Footer'

function Home () {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
        <HeroSection />
        <CoronaSection />
        <Cards />
       {/* <FooterSection />   */}    
        </>
    );
}

export default Home;