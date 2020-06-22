import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div id='contact'>
      <h3>Booking / Contact</h3>
      <form id='form' class='topBefore' name='contact' method='post'>
        <input type='hidden' name='form-name' value='contact' />
        <input name='name' id='name' type='text' placeholder='NAME' />
        <input name='email' id='email' type='text' placeholder='E-MAIL' />
        <textarea
          name='message'
          id='message'
          type='text'
          placeholder='MESSAGE'
          resize='none'
        ></textarea>
        <input id='submit' type='submit' value='Send!' />
      </form>
    </div>
  );
}
