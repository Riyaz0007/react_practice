import React from "react"
import '../styles/card.css';
function Card ({details}){
    return (
        <>
        <div className="main-card">
            <img src='https://photographylife.com/wp-content/uploads/2014/09/Nikon-D750-Image-Samples-2.jpg' alt="This is an sampe pic  of the card"/>
            <h5 className="card-title">{details.title}</h5>
            <p>{details.desc}</p>
        </div>
        
        </>
    )
}
export default Card;