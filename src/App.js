import React from "react";
import Card from './components/Card.js'

//practice files
import Test from './components/test.js'

export default function App() {
    /*console.log(jokesData)
    const jokeElements = jokesData.map(joke =>{
        return <Joke
            setup={joke.setup}
            punchline={joke.punchline}
        />
    })*/
    return (
        <div className="container">
            {/*jokeElements*/}
            <Card
                status="SOLD OUT"
                cardIMG={'life-lessons.png'}
                cardRating="5.0"
                cardRatingNumPeople={6}
                cardRatingPlace="USA"
                cardName="Life lessons with Katie Zaferes"
                cardPrice={136}
            />
            <Card
                status="ONLINE"
                cardIMG={'wedding-photography.png'}
                cardRating="5.0"
                cardRatingNumPeople={30}
                cardRatingPlace="USA"
                cardName="Learn wedding photography"
                cardPrice={125}
            />
            <Card
                status="ONLINE"
                cardIMG={'bike.png'}
                cardRating="4.8"
                cardRatingNumPeople={2}
                cardRatingPlace="USA"
                cardName="Group Mountain Biking"
                cardPrice={50}
            />
            
        </div>
    )
}