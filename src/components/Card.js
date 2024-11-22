import React from 'react';
import starIMG from '../star_1.png';

export default function Card(props) {
    //you can also destructure props immediately. so instead of props, you can just put {x, y, z} above.
    //but the advantage of using a props variable is that it's easy to tell which variable  were imported into your component.
    //and which were computed/created inside your component
    console.log(props)
    return (
        <div className="card">
            <img className="card-img" src={`./images/${props.coverImg}`} />
            <h2 className="card-status">{props.status}</h2>
            <div className="card-info-container">
                <div className="card-rating-container">
                    <img className="card-rating-img" src={starIMG} />
                    <h2 className="card-rating-num">{props.rating}</h2>
                    <h2 className="card-rating-num-people">&#40;{props.reviewCount}&#41;</h2>
                    <h2 className="card-rating-bullet">&#8226;</h2>
                    <h2 className="card-rating-place">{props.location}</h2>
                </div>
                <h2 className="card-name">{props.title}</h2>
                <h2 className="card-price"><span className="card-price-bold">From ${props.price}</span> / person</h2>
            </div>


        </div >
    )
}