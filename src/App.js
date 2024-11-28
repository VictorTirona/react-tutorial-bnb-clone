import React from "react";
import Header from './components/Header.js'
import Meme from './components/Meme.js'
import imgData from './data.js'

export default function App() {
    return (
        <div className="container">
            <Header/>
            <Meme
                imgData = {imgData}
            />
        </div>
    )
}