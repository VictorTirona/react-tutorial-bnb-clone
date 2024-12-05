import React from "react" //you can also destructure useState to make your code cleaner

export default function StateExample() {
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])

    const mappedArray = thingsArray.map(thing => {
        return (<p key={thing}>{thing}</p>)
    })

    function addItem() {
        setThingsArray(function (oldArray) {
            return [...oldArray, `Thing ${oldArray.length + 1}`]
        }) //you cannot use PUSH. Because that modifies the state directly. PUSH also returns the length, not the actual array. So instead, it's easy to declare a new array using the Spread function [...oldArray]. If not using the Spread Function, you can just create a for loop
    }

    return (
        <div className="things">
            <button onClick={addItem}>How do you write like tomorrow won't arrive</button>
            {mappedArray}
        </div>
    )
}