import React from 'react'
import {Link} from 'react-router-dom'
import '../styling/header.css'

const Header = () => {
  return (
      <div className="header">
        <div className="header-left">
          <Link to="/" className="header-tab">Home</Link>
        </div>
        <div className="header-mid"></div>
        <div className="header-right">
          <Link to="/about" className="header-tab">About me</Link>
          <Link to="/games" className="header-tab">Games</Link>
          <Link to="/blog" className="header-tab">Blog</Link>
        </div>
      </div>
  )
}

export default Header