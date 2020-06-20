import React from 'react';
import './Left.css';

export default function Left() {
  return (
    <div className='left-container'>
      <div className='nameplate'>
        <h1>Tony</h1>
        <h2>Banks</h2>
      </div>
      <div class='elfsight-app-c5aadf41-ffde-46e3-9cf6-1c3ee8d982a0'></div>

      <div className='footer'></div>

      {/* Music Player for SoundCloud */}
      {/* <iframe
        title='music player'
        width='100%'
        height='550'
        scrolling='no'
        frameborder='no'
        allow='autoplay'
        src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1076189032&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
      ></iframe> */}
    </div>
  );
}
