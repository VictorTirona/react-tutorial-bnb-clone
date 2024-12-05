import React from "react" //you can also destructure useState to make your code cleaner

export default function StateExample() {
    const [isGoingOut, setGoingOut] = React.useState(true) //using conditional ternary operators

    function handleClick(){
        setGoingOut(function(oldValue){
            return !oldValue
        })
    }

    return (
        <div className="state">
            <h1 className="state--title">Do you feel like going out tonight?</h1>
            <div onClick={handleClick} className="state--value">
                <h1>{isGoingOut === true ? "Yes" : "No"}</h1> 
            </div>
        </div>
    )
}