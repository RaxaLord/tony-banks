import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className='header'>
      {/* <nav> */}
      <ul>
        <li>Home</li>
        <li>Video</li>
        <li>Tour</li>
        <li>About</li>
        <li>Booking & Contact</li>
      </ul>

      <ul>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Instagram</li>
        <li>SoundCloud</li>
        <li>YouTube</li>
      </ul>
      {/* </nav> */}
    </div>
  );
}
