import React from 'react'
import {BsLinkedin} from 'react-icons/bs' 
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

export const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="htpps://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="htpps://github.com" target="_blank"><BsGithub /></a>
        <a href="htpps://facebook.com" target="_blank"><BsFacebook /></a>
    </div>
  )
}
export default HeaderSocials