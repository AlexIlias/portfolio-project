import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rj4t2dr', 'template_rgo7m1t', form.current, 'Tnh3lrF2Uji4k0lWr')
    
    e.target.reset();
  };

  

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Alexandru Iliasov</h5>
            <a href="htpps://m.me/alexander.iliashov.9" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className='contact__option-icon' />
            <h4>Email</h4>
            <h5>alexiliashov@gmail.com</h5>
            <a href="mailto:alexiliashov@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+12456789</h5>
            <a href="#" target="_blank">Send a message</a>
          </article>

        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Yor Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
