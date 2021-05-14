import React from 'react'
import '../../App.css';
import HeroSection from '../HeroSection.js';
import Cards from '../Cards';
import CoronaSection from '../CoronaSection';
//import FooterSection from '../Footer'

function Home () {
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