import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Homepage from './screens/Homepage';
import Navbar from './Navigation/Navbar';
import About from './screens/About';
import Sell from './screens/Sell';
import Blog from './screens/Blog';
import ContactUs from './screens/ContactUs';
import FooterSection from './Footer/FooterSection';

import './App.scss';

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
