import React from 'react';
import './App.css';
import {Navigation} from './Components/Home/Navigation';
import Banner from './Components/Home/Banner';
import Stat from './Components/AboutUs/Stat';
import Team from './Components/AboutUs/Team';
import Offers from './Components/Services/Offers';
import Projects from './Components/Portfolio/Projects';
import Review from './Components/Portfolio/Review';
import SendAMsg from './Components/Contact/SendAMsg';
import Footer from './Components/Home/Footer';
//import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <Stat />
      <Offers />
      <Team />
      <Projects />
      <Review />
      <SendAMsg />
      <Footer />
    </div>
  );
}

export default App;
