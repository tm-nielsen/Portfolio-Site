import React from "react";
import '../styling/game.css'

export const Game = ({title, desc, cover, date, link}) => {

    return <>
        <article className='game'>
            <a href={link} className='game-title'>{title}</a>
            <img src={cover} alt={desc} className='game-cover'/>
            <h5 className="game-date">{date}</h5>
            <h3 className="game-desc">{desc}</h3>
            {/* <h3>{title}</h3>
            <a href={link}>Play Now!</a> */}
        </article>
    </>
}