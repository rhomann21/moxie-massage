import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Bios from './components/pages/LMT/Bios';
import FooterSection from './components/Footer';
import HeatherBio from './components/pages/LMT/HeatherBio';
import KendraBio from './components/pages/LMT/KendraBio';
import Yoga from './components/pages/Yoga';
import Services from './components/pages/Services/Services';
import Contact from './components/pages/Contact';
import Massages from './components/pages/Services/Massages';
import BodyTreatments from './components/pages/Services/BodyTreatments';
import Membership from './components/pages/Membership/Membership';
import PrivacyPolicy from './components/pages/Legal/PrivacyPolicy';
import ADAPolicy from './components/pages/Legal/ADA';
import TermsOfService from './components/pages/Legal/TermsOfService';
import WhatWeDo from './components/pages/About/WhatWeDo';
import Massage101 from './components/pages/About/Massage101';

function App() {

  return (
<>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/membership' component={Membership} />
        <Route path='/bios' component={Bios} />
        <Route path='/HeatherBio' component={HeatherBio} />
        <Route path='/KendraBio' component={KendraBio} />     
        <Route path='/yoga' component={Yoga} />
        <Route path='/contact' component={Contact} />
        <Route path='/massages' component={Massages} />
        <Route path='/bodytreatments' component={BodyTreatments} />
        <Route path='/privacypolicy' component={PrivacyPolicy} />
        <Route path='/adapolicy' component={ADAPolicy} /> 
        <Route path='/termsofservice' component={TermsOfService} />
        <Route path='/whatwedo'component={WhatWeDo} />
        <Route path='/massage101' component={Massage101} />
      </Switch>
      <FooterSection />
    </Router>
</>
  );
}

export default App;
