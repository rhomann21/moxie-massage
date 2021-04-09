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

function App() {
  return (
<>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='./services' component={Services} />
        <Route path='./products' component={Products} />
        <Route path='./signup' component={SignUp} />
        <Route path='./bios' component={Bios} />
        
      </Switch>
      <FooterSection />
    </Router>
</>
  );
}

export default App;
