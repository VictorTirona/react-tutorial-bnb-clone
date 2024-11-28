import React from 'react'

export default function Meme(props) {
    function handleClick(){
        let num = Math.floor(Math.random()*props.imgData.data.memes.length)
        console.log(props.imgData.data.memes[num].url)
    }

    function hoverGray(){
        console.log("Gray!")
    }
    console.log(props.imgData)

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
                    <button onClick={handleClick} type="submit" className="meme--submit-button">Get a new meme image &#x1F3A8;</button>

                <img onMouseOver={hoverGray} src={`./images/meme.png`} alt="meme photo" className="meme--img" />

            </div>
        </main>
    )
}