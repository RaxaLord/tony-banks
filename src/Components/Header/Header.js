import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className='header'>
      {/* <nav> */}
      <ul>
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#video'>Video</a>
        </li>
        {/* <li>Tour</li> */}
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#contact'>Booking & Contact</a>
        </li>
      </ul>

      <ul>
        <li>
          <a
            href='https://www.instagram.com/asoukna/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='instagram.svg' alt='instagram' />
          </a>
        </li>
        <li>
          <a
            href='https://music.apple.com/us/artist/tony-banks/1500094357'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='itunes.svg' alt='itunes' />
          </a>
        </li>
        <li>
          <a
            href='https://open.spotify.com/artist/5fMnlAnjLaa72oy64etsmM?si=G2qEIqNoTCO5XEm6zYNrLg'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='spotify.svg' alt='spotify' />
          </a>
        </li>
        <li>
          <a
            href='https://www.youtube.com/channel/UChE4a0J5RTVmiZBL0FwgoOA'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='youtube.svg' alt='youtube' />
          </a>
        </li>
      </ul>
      {/* </nav> */}
    </div>
  );
}
