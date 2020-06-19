import React from 'react';
import './Right.css';
import Header from '../Header/Header';

export default function Right() {
  return (
    <div className='right-container'>
      <Header />
      <section>
        <img
          src='https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/axu6i0kmazailgczbn1k/kid-cudi'
          alt='kid cudi'
          className='main-photo'
        />
      </section>
      <section>
        <h1>New Video</h1>
        <br />
        <iframe
          title='video'
          width='720px'
          height='400px'
          src='https://www.youtube.com/embed/jhUz2z1hbRI'
          frameborder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
      </section>
      <section>Tour Section</section>
      <section>About Section</section>
      <section>Contact Section</section>
    </div>
  );
}
