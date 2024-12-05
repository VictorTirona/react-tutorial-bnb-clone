import React from "react";
import Header from './components/Header.js'
import Meme from './components/Meme.js'
import StateExample from './components/StateExample.js'

export default function App() {
    return (
        <div className="container">
            <StateExample />
            <Header/>
            <Meme/>
        </div>
    )
}