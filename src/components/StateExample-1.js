import React from "react" //you can also destructure useState to make your code cleaner

export default function StateExample() {
    //we destructure the result of useState para cleaner
    //the result of useState is an array of two things [State, and a function]
    const [isImportant, setIsImportant] = React.useState("Yes") //naming convention for the function: set+Name of function.
        //isImportant is the STATE. It can be updated by calling the function
    function handleClick() {
        setIsImportant("No") //when we call the variable, it provides a new version of State
    }

    return (
        <div className="state">
            <h1 className="state--title">State is important to know</h1>
            <div onClick={handleClick} className="state--value">
                <h1>{isImportant}</h1>
            </div>
        </div>
    )
}