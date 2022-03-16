import React from 'react'
import {FaDiscord} from 'react-icons/fa'
import { GameList } from '../components/GameList'
import '../styling/gamepage.css'

const Games = () => {
  return <>
    <div className="gamepage-header">
      <div className="gamepage-title-box">
        <h1 className="gamepage-title">
          Games
        </h1>
        <div className="gamepage-icon-box">
          <a href="https://discord.gg/hqh7Wu94cF">
            <FaDiscord className='gamepage-icon'/>
          </a> 
        </div>
      </div>
      <p className="gamepage-desc">
        I've made quite a few of these over the years, all of which you can see right here. Every entry represents the development of a new skill from modelling to animation to local area networking. If you're interested in following my development process more closely, consider joining my discord.
      </p>
    </div>
    <a href="https://cors-anywhere.herokuapp.com/">click if broken</a>
    <GameList/>
  </>
}

export default Games