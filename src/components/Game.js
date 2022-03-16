import React, {useState} from "react";
import {BiCaretDown} from 'react-icons/bi'
import '../styling/game.css'
import collections from "../data/collections"
import descriptions from '../data/descriptions'

export const Game = ({title, desc, cover, date, link}) => {
    const [expand, setExpand] = useState(false)

    // desc = descriptions[title];

    return <>
        <div className="game">
            <img src={cover} alt={desc} className='game-cover'/>
            <article className='game-info'>
                <a href={link} alt='Play on Itch.io' className='game-title align-right'>{title}</a>
                <h5 className="game-date align-right">
                    {date.split(' ')[0].split('-').reverse().join('/')}
                </h5>
                <div className="game-desc-box">
                    <h3 className="game-desc">{desc}</h3>
                    <BiCaretDown className={expand?"game-caret-clicked":'game-caret'}
                    onClick={()=>setExpand(!expand)}/>
                </div>
                {expand?<h3 className="game-desc">{descriptions[title]}</h3>: null}
            </article>
        </div>
        
    </>
}