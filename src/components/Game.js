import React from "react";
import '../styling/game.css'

export const Game = ({title, desc, cover, date, link}) => {

    return <>
        <div className="game">
            <img src={cover} alt={desc} className='game-cover'/>
            <article className='game-info'>
                <a href={link} className='game-title align-right'>{title}</a>
                <h5 className="game-date align-right">
                    {date.split(' ')[0].split('-').reverse().join('/')}
                </h5>
                <h3 className="game-desc">{desc}</h3>
            </article>
        </div>
        
    </>
}