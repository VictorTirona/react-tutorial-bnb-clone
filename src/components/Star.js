import React from "react"

//used with StateExample-8

export default function Star(props){
    let starIcon = (props.isFilled) ? "star-fill.png" : "star-no-fill.png";
    
    return(
        <div>
            <img src={`../images/${starIcon}`} width='100px' onClick={props.handleClick}/>
        </div>
    )
}