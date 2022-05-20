import React from 'react'
import './header.css'
import {CTA} from './CTA'
import ME from '../../assests/Alexandru-removebg-preview.png'
import {HeaderSocials} from './HeaderSocials'

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Alexandru Iliasov</h1>
        <h5 className="text-light">React Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
          </div>

          <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>


    </header>
  )
}
