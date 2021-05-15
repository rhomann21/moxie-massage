import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import SignUp from './components/pages/Signup';
import Bios from './components/pages/LMT/Bios';
import FooterSection from './components/Footer';
import HeatherBio from './components/pages/LMT/HeatherBio';
import KaylaBio from './components/pages/LMT/KaylaBio';
import KendraBio from './components/pages/LMT/KendraBio';
import Yoga from './components/pages/Yoga';
import Services from './components/pages/Services/Services';
import Contact from './components/pages/Contact';

function App() {
  return (
<>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/signup' component={SignUp} />
        <Route path='/bios' component={Bios} />
        <Route path='/HeatherBio' component={HeatherBio} />
        <Route path='/KaylaBio' component={KaylaBio}   />
        <Route path='/KendraBio' component={KendraBio} />     
        <Route path='/yoga' component={Yoga} />
        <Route path ='/contact' component={Contact} />
      </Switch>
      <FooterSection />
    </Router>
</>
  );
}

export default App;
