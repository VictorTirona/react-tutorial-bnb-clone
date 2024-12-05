import React from "react" //you can also destructure useState to make your code cleaner

export default function StateExample() {
    const [state,setUpdateNum] = React.useState(0)
    
    function addOne(){
        setUpdateNum(state+1)
    }
    function subOne(){
        setUpdateNum(state-1)
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