import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Menu from './Menu/Menu'
import Hero from './Hero/Hero'
import HomePage from './HomePage/HomePage'
import Footer from './Footer/Footer'
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';
import Chart from './Chart/Chart';

function App() {
  return (
    <Router>
      <Menu/>
      <Hero/>
      <div className="mainContainer">
        <Switch>
            <Route path="/about.html">
                <AboutPage/>
            </Route>
            <Route path="/login.html">
                <LoginPage/>
            </Route>
            <Route path="/">
                <HomePage/>
                <Chart/>
            </Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
