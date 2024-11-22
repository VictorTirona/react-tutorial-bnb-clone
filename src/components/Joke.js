import React from 'react';

export default function Joke(props) {
    console.log(props)
    return (
        <div className="joke">
            <h1>Setup: {props.setup}</h1>
            <h2>Punchline: {props.punchline}</h2>
        </div >
    )
}