import React from "react";

export const Game = ({title, desc, cover, link}) => {

    return <>
        <article>
            <img src={cover} alt={desc} />
            <h3>{title}</h3>
            <a href={link}>Play Now!</a>
        </article>
    </>
}