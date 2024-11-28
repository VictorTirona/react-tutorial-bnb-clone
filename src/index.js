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
Making interactive applications.
    I. Adding Event Listeners
        A. Javscript way: .addEventListener(<event>, <function>)
            - "click" = event
        B. HTML way: onclick="myFunction()"
            - This is the way we'll uses in React/JSX. But instead of
            "onclick", it is "onClick"
    II. Example of adding event listeners
        A. <button onClick={function}>Click me</button>
            - Define function outside of the return()
            - if you add a "()" to the function, it will run it immediately
            if you don't have the "()" it's passed as a value and will
            only run once clicked
            -https://www.w3schools.com/react/react_events.asp
    
*/