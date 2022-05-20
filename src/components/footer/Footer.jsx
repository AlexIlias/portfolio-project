import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

export const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">ALEX</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="htpss://facebook.com"><BsFacebook /></a>
        <a href="htpss://instagram.com"><BsInstagram /></a>
        <a href="htpss://linkedin.com"><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>$copy; Alex Iliasov. All rights reserved.</small>
      </div>

    </footer>
  )
}
