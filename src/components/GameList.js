import React, {useState, useEffect} from 'react'
import {Game} from './Game'
const proxy = "https://cors-anywhere.herokuapp.com/"

export const GameList = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async() => {
        const result = await fetch(
            proxy + `https://itch.io/api/1/${process.env.REACT_APP_API_KEY}/my-games`
        )
        const data = await result.json()
        let games = data.games.filter(x => x.published === true)
        games = games.sort((a, b) => (b.downloads_count - a.downloads_count))
        setGames(games)
        console.log(data)
    }

    return (
        <div> Games List
            <li>
                {games.map((game, index) => 
                    <Game title={game.title} desc={game.short_text} cover={game.cover_url} date={game.published_at} link={game.url} key={index}/>
                )}
            </li>
        </div>
    )
}
