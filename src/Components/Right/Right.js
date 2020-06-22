import React from 'react';
import './Right.css';
import Header from '../Header/Header';
import Home from './Home/Home';
import Video from './Video/Video';
import About from './About/About';
import Contact from './Contact/Contact';

export default function Right() {
  return (
    <div className='right-container'>
      <Header />
      <div className='right-wrapper'>
        <Home />
        <Video />
        <About />
        <Contact />
      </div>
    </div>
  );
}
