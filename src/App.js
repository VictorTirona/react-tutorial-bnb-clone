import React from "react";
import Card from './components/Card.js'
import cards from './data.js'

export default function App() {
    const generateCards = cards.map(card => {
        return <Card
            status = {card.status}
            title = {card.title}
            price = {card.price}
            coverImg = {card.coverImg}
            rating = {card.stats.rating}
            reviewCount = {card.stats.reviewCount}
            location = {card.location}
        />
    })
    return (
        <div className="container">
            {generateCards}
        </div>
    )
}