import React from 'react'
import {Link} from 'react-router-dom'
import '../styling/header.css'

const Header = () => {
  return (
      <div className="header">
        <Link to="/" className="header-home">Home</Link>
        <Link to="/about" className="header-tab">About me</Link>
        <Link to="/games" className="header-tab">Games</Link>
        <Link to="/blog" className="header-tab">Blog</Link>
      </div>
  )
}

export default Header