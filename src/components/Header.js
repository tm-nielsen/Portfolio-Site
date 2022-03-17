import React from 'react'
import {Link} from 'react-router-dom'
import {BiHome, BiBody, BiGame, BiBookContent} from 'react-icons/bi'
import '../styling/header.css'

const Header = () => {
  return (
      <div className="header">
        <div className="header-left">
          <Link to="/" className="header-tab">
            <BiHome className="header-icon"/>
          </Link>
        </div>
        <div className="header-mid"></div>
        <div className="header-right">
          <Link to="/about" className="header-tab">
            <BiBody className='header-icon'/>About me
          </Link>
          <Link to="/games" className="header-tab">
            <BiGame className="header-icon"/>Games
          </Link>
          <Link to="/blog" className="header-tab">
            <BiBookContent className='header-icon'/>Blog
          </Link>
        </div>
      </div>
  )
}

export default Header