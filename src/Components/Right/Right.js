import React from 'react';
import './Right.css';
import Header from '../Header/Header';

export default function Right() {
  return (
    <div className='right-container'>
      <Header />
      <section>
        <img
          src='https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/59524725_10214288281465046_1091971486270357504_n.jpg?_nc_cat=105&_nc_sid=7aed08&_nc_ohc=ScOgCHyU4NAAX9VAgy1&_nc_ht=scontent.fphx1-2.fna&oh=e5f20a1b2434033ddd0ab3acfd484e0d&oe=5F14AAEF'
          alt='tony banks'
          className='main-photo'
        />
      </section>
      <section>
        <h3>New Video</h3>
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
