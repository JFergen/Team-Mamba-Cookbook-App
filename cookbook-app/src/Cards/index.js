import React from 'react';
import './Cards.css'
function Card({title, imageURL, body, ingredients, time}){
    return(
        <div className= "card-container">
            <div className= "image-container">
                <img src= {imageURL} alt='' />
            </div>
            <div className="card-title">
                <h3>{title}</h3>
            </div>
            <div className="card-body">
                <h3>{body}</h3>
            </div>
            <div className="card-ingredients">
                <h2>{ingredients}</h2>
            </div>
            <div className="card-time">
                <h3>{time}</h3>
            </div>
        </div>
        
    );
}
export default Card