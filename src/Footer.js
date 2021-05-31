import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Zapisz się na newsletter!
        </p>
        <p className='footer-subscription-text'>
          Możesz zrezygnować w każdym momencie.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Twój Email'
            />
            <Button buttonStyle='btn--outline'>Zapisz</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
      <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
              <a href="https://github.com/KacperHoffman" rel="noreferrer">Kacper</a>
              <a href="https://linkmix.co/4854233" rel="noreferrer">Błażej</a>
              <a href="https://linkmix.co/4854065" rel="noreferrer">Jakub</a>  
          </div>
        </div>
        <div className='footer-link-wrapper'>         
          <div class='footer-link-items'>
            <h2>Znajdź Nas</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9280.06673096029!2d18.544828800405263!3d54.44499228513045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd0a9b68f487b5%3A0x417b5ebe73ad63e5!2sPiaskowa%209%2C%20Sopot!5e0!3m2!1spl!2spl!4v1622368415943!5m2!1spl!2spl" width="400" height="300" text-align="center" allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              CourseApi
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Course © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;