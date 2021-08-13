import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Homepage from './screens/Homepage';
import Navbar from '../src/Navbar/Navbar';
import About from './components/About/About';
import Sell from './components/Sell/Sell';
import Blog from './components/Blog/Blog';
import ContactUs from './components/ContactUs/ContactUs';

import './App.scss';
import FooterSection from './Footer/FooterSection';

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/sell" component={Sell} />
          <Route path="/contact-us" component={ContactUs} />
        </Switch>
        <FooterSection />
      </div>
    </Router>
  );
};

export default App;
