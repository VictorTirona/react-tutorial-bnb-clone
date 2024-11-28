import React from 'react';

export default function Header(){
    return(
        <div className="header--container">
            <img src={`./images/logo-troll.png`} alt="logo" className="header--logo"/>
            <h1 className="header--title">Meme Generator</h1>
        </div>
    )
}