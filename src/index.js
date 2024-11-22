import React from "react";
import { createRoot } from "react-dom/client";
import './index.css'
import App from './App.js'

const root = createRoot(document.getElementById('root'))



root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
    
)

/*
These are my notes from Section 2: Airbnb App
    1. Props
    2. Creating components from an array of data


I skipped creating the Header and the Hero section -- 2:31:00 to 2:43:11
I stopped at 3:36:13 but I already added props to the airbnb cards

USING ARRAYS
    React has a special behavior where -- if we give it an array of objects:

    for example, ["Red", "Orange", "Yellow"]

    if we output it in React, it will be outputted as RedOrangeYellow

    If we have an array of JSX elements, for example: [<h1>Red</h1>, <h1>Orange</h1>, <h1>Yellow</h1>]
    Then React will output that as HTML. 

    Bottomline: Each array item will be treated as a NEW line of HTML

    In Real Life:
        - Data will be in an array of objects
        - Often, we will use the array.map() method to create component instances
        and inserting the data via the map as props
        - Using array.map() is more "self-sustaining" because as new data is added,
        it will just add more instances of the component 


*/