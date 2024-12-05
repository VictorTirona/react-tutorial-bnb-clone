import React from "react"

//used with State Example-7

export default function Counter(props) {
    return (
        <div className="counter--count">
            <h1>{props.number}</h1>
        </div>
    )
}