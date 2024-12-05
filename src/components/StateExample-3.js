import React from "react" //you can also destructure useState to make your code cleaner

export default function StateExample() {
    const [state, setUpdateNum] = React.useState(0)


    //when updating the state value via the setUpdateNum func
    //the best practice is...
    //instead of: setUpdateNum(state+1)
    //use: setUpdateNum(function(oldValue){
    //      return oldValue+1})]
    //why? It has something to do with how React reads/functions internally.
    //  - Within the setUpdateNum func, the input is actually a callback function
    //  - that callback function receives the "oldValue" of state for you to use
    function addOne() {
        setUpdateNum(function (oldNum) {
            return oldNum + 1;
        })
    }
    function subOne() {
        setUpdateNum(function (oldNum) {
            return oldNum - 1;
        })
    }



    return (
        <div className="counter">
            <button onClick={subOne} className="counter--minus">-</button>
            <div className="counter--count">
                <h1>{state}</h1>
            </div>
            <button onClick={addOne} className="counter--plus">+</button>
        </div>
    )
}

    //Conditional Ternary Operator
    const isGoingOut = true

    let answer = isGoingOut === true ? "Yes" : "No"

    console.log(answer)