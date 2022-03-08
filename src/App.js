import React from 'react'
import {games} from './games'
import {Game} from './Game'
import { GameList } from './GameList'

const App = () => {
  return <>
    <h1>App</h1>
    <GameList/>
    <li>
      {games.map((game, index) => 
        <Game title={game.title} desc={game.desc} cover={game.cover} link={game.link} key={index}/>
      )}
    </li>
  </>
}


export default App;