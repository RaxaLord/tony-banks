import React from 'react';
import './Right.css';
import Header from '../Header/Header';

export default function Right() {
  return (
    <div className='right-container'>
      <Header />
      <section id='main_photo'>
        <img
          src='https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/59524725_10214288281465046_1091971486270357504_n.jpg?_nc_cat=105&_nc_sid=7aed08&_nc_ohc=ScOgCHyU4NAAX9VAgy1&_nc_ht=scontent.fphx1-2.fna&oh=e5f20a1b2434033ddd0ab3acfd484e0d&oe=5F14AAEF'
          alt='tony banks'
          className='main-photo'
        />
      </section>

      <section id='video_section'>
        {/* <h3>New Video</h3> */}
        <br />
        <iframe
          id='video_player'
          title='video'
          width='95%'
          height='80%'
          src='https://www.youtube.com/embed/jhUz2z1hbRI'
          frameborder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
      </section>

      {/* <section id='tour_section'>
        <h3>Tour Section</h3>
      </section> */}

      <section id='about_section'>
        <h3>About Me</h3>
        <container>
          <img
            className='about-photo'
            src='https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/92909726_10217308403446208_1018904304334929920_n.jpg?_nc_cat=100&_nc_sid=110474&_nc_ohc=rgAEgoNbhpoAX810Au1&_nc_ht=scontent.fphx1-2.fna&oh=8eca086c6f6f23a357cbfd03fe38d773&oe=5F1583FF'
            alt='tony banks sitting'
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            odio praesentium eligendi, molestias fuga tempora hic cupiditate
            quidem soluta voluptatibus! Laborum voluptatem, quia sint aliquid
            accusamus eaque temporibus pariatur odit! Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Adipisci esse asperiores,
            accusantium iste, vel voluptatem quos aliquid ducimus eligendi ut
            libero, sed necessitatibus quisquam ipsam incidunt. Assumenda earum
            omnis temporibus.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            iste nobis nam exercitationem, harum ullam, fugit blanditiis modi
            accusantium dicta temporibus similique aliquam voluptatibus rerum
            maxime suscipit voluptate quis minus?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            perferendis eligendi alias accusantium, asperiores, in esse culpa
            nisi, repellendus eos nemo delectus repudiandae pariatur a
            voluptatum corporis placeat qui. Sed? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Ad quidem in voluptatibus rem. Facere
            itaque explicabo dolorem dolor tenetur sequi, ullam adipisci
            molestias unde, voluptatibus quaerat ad voluptates commodi error.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
            minus laboriosam minima maxime cum, voluptatem commodi maiores? Nemo
            ut porro cum nostrum neque quisquam maxime necessitatibus veniam
            deserunt, quod aliquid.
          </p>
        </container>
      </section>

      <section id='contact_section'>
        <h3>Booking / Contact</h3>

        {/* <form name='contact' method='post'>
          <p>
            <label>
              Your Name: <input type='text' name='name' />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type='email' name='email' />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name='message' resize='none'></textarea>
            </label>
          </p>
          <p>
            <button type='submit'>Send</button>
          </p>
        </form> */}

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
      </section>
    </div>
  );
}
