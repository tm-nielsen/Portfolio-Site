import React from 'react'
import {Link} from 'react-router-dom'
import {BiBody} from 'react-icons/bi'
import '../styling/home.css'

const Home = () => {
  return <div className="home">
    <BiBody className='home-image'/>
    <div className="home-content">
      <h1 className="home-title">Benjamin Nielsen</h1>
      <p className="home-desc">I'm a passionate developer in my final year of software engineering at the Univeristy of Calgary. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit tempore sit at? Quidem dicta animi officiis quasi mollitia quo provident praesentium eligendi, ducimus modi exercitationem delectus. Eum vitae facere ipsam?</p>
      <div className="home-link-box">
        <div style={{flex:1}}/>
        <Link to="/about" className='home-link'>More About Me</Link>
        <div style={{flex:1}}/>
        <Link to='/games' className='home-link'>My Games</Link>
        <div style={{flex:1}}/>
      </div>
    </div>
  </div>
}

export default Home