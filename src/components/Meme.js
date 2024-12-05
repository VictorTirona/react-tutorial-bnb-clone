import React from 'react'
import memesData from '../data.js'

export default function Meme() {

    const [meme, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })



    //I guess we're setting this as a state so that we can update how many memes we have in the future?
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        let num = Math.floor(Math.random() * memesArray.length)
        console.log(memesArray[num].url)
        setMemeImage(function (oldState) {
            return {
                ...oldState,
                randomImage: memesArray[num].url
            }
        }
        )
    }

    function hoverGray() {
        console.log("Gray!")
    }

    console.log(memesData)



    return (
        <main>
            <div className="meme--container">
                <div className="meme--inputs-container">
                    <div className="meme--inputs-1">
                        <h3 className="meme--inputs-1-text">Top text</h3>
                        <input type="text" className="meme--inputs-1-input" placeholder="Shut up" />
                    </div>
                    <div className="meme--inputs-2">
                        <h3 className="meme--inputs-2-text">Bottom text</h3>
                        <input type="text" className="meme--inputs-2-input" placeholder="And take my money" />
                    </div>
                </div>
                <button onClick={getMemeImage} type="submit" className="meme--submit-button">Get a new meme image &#x1F3A8;</button>
                <img onMouseOver={hoverGray} src={meme.randomImage} alt="meme photo" className="meme--img" />
            </div>
        </main>
    )
}