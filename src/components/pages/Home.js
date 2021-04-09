import React from 'react'
import '../../App.css';
import HeroSection from '../HeroSection.js';
import Cards from '../Cards';
//import FooterSection from '../Footer'

function Home () {
    return (
        <>
        <HeroSection />
        <Cards />
       {/* <FooterSection />   */}    
        </>
    );
}

export default Home;