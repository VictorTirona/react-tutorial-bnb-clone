import React from 'react';
import cardIMG from '../image_12.png';
import starIMG from '../star_1.png';

export default function Card() {
    return (
        <div className="card">
            <img className="card-img" src={cardIMG} />
            <h2 className="card-status">SOLD OUT</h2>
            <div className="card-info-container">
                <div className="card-rating-container">
                    <img className="card-rating-img" src={starIMG} />
                    <h2 className="card-rating-num">5.0</h2>
                    <h2 className="card-rating-num-people">&#40;6&#41;</h2>
                    <h2 className="card-rating-bullet">&#8226;</h2>
                    <h2 className="card-rating-place">USA</h2>
                </div>
                <h2 className="card-name">Life lessons with Katie Zaferes</h2>
                <h2 className="card-price"><span className="card-price-bold">From $136</span> / person</h2>
            </div>


        </div >
    )
}