import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/Signup';
import Bios from './components/pages/LMT/Bios';
import FooterSection from './components/Footer';
import HeatherBio from './components/pages/LMT/HeatherBio';
import KaylaBio from './components/pages/LMT/KaylaBio';
import KendraBio from './components/pages/LMT/KendraBio';

function App() {
  return (
<>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Services' component={Services} />
        <Route path='/Products' component={Products} />
        <Route path='/Signup' component={SignUp} />
        <Route path='/Bios' component={Bios} />
        <Route path='/HeatherBio' component={HeatherBio} />
        <Route path='/KaylaBio' component={KaylaBio}   />
        <Route path='/KendraBio' component={KendraBio} />     
      </Switch>
      <FooterSection />
    </Router>
</>
  );
}

export default App;
