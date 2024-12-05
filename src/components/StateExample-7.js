import React from "react" //you can also destructure useState to make your code cleaner
import Counter from "./Counter.js"

//State Example #7: Combining the concepts of using props and State.
//  - States are handled in the App component
//  - Props are handled within individual components
//  - Whenever a state is updated, both the App component and individual components are re-rendered

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
            <Counter
                number={state}
            />
            <button onClick={addOne} className="counter--plus">+</button>
        </div>
    )
}