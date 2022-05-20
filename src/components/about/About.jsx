import React from 'react'
import './about.css'
import ME from '../../assests/me-about.jpg'
import {BsAward} from 'react-icons/bs'
import {FaUsers} from 'react-icons/fa'
import {RiFolderSharedFill} from 'react-icons/ri'

export const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              < BsAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              < FaUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              < RiFolderSharedFill className='about__icon' />
              <h5>Projects</h5>
              <small>80+ Completed Projects</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dignissimos at quae quibusdam earum quidem? Sequi molestiae 
            architecto consequuntur fuga esse qui, quis non in. Illum impedit 
            libero tempore voluptatem exercitationem?
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
          
        </div>
      </div>
    </section>
  )
}
