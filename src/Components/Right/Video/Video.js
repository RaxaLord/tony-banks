import React from 'react';
import './Video.css';

export default function Video() {
  return (
    <div id='video'>
      <h3>New Video</h3>
      <div className='video_player'>
        <iframe
          id='video_player'
          title='video'
          width='95%'
          height='100%'
          src='https://www.youtube.com/embed/jhUz2z1hbRI'
          frameborder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
