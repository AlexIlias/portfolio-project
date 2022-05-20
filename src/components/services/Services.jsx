import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'

export const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>UI/UX design</h3>
        </div>
        <ul className="service__list">
        <li>
          <AiOutlineCheck className='service__list-icon' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, natus!</p>
        </li>
        <li>
          <AiOutlineCheck className='service__list-icon' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, natus!</p>
        </li>
        <li>
          <AiOutlineCheck className='service__list-icon' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, natus!</p>
        </li>
        <li>
          <AiOutlineCheck className='service__list-icon' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, natus!</p>
        </li>
        <li>
          <AiOutlineCheck className='service__list-icon' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, natus!</p>
        </li>
        <li>
          <AiOutlineCheck className='service__list-icon' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, natus!</p>
        </li>
        </ul>
      </article>
      {/* END OF UI/UX */}
      <article className="service">
        <div className="service__head">
          <h3>Web Development</h3>
        </div>
        <ul className="service__list">
        <li>
          <AiOutlineCheck className='service__list-icon' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, natus!</p>
        </li>
        <li>
          <AiOutlineCheck className='service__list-icon' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, natus!</p>
        </li>
        <li>
          <AiOutlineCheck className='service__list-icon' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, natus!</p>
        </li>
        <li>
          <AiOutlineCheck className='service__list-icon' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, natus!</p>
        </li>
        <li>
          <AiOutlineCheck className='service__list-icon' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, natus!</p>
        </li>
        </ul>
      </article>
      {/* WEB */}
      <article className="service">
        <div className="service__head">
          <h3>Content Creation</h3>
        </div>
        <ul className="service__list">
        <li>
          <AiOutlineCheck className='service__list-icon' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, natus!</p>
        </li>
        <li>
          <AiOutlineCheck className='service__list-icon' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, natus!</p>
        </li>
        <li>
          <AiOutlineCheck className='service__list-icon' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, natus!</p>
        </li>
        <li>
          <AiOutlineCheck className='service__list-icon' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, natus!</p>
        </li>
        <li>
          <AiOutlineCheck className='service__list-icon' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, natus!</p>
        </li>
        <li>
          <AiOutlineCheck className='service__list-icon' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, natus!</p>
        </li>
        </ul>
      </article>
      {/* CONTENT */}
      </div>
    </section>
  )
}