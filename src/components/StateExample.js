import React from "react" //you can also destructure useState to make your code cleaner
import Star from "./Star.js"

/*State Example #9: using short circuit evaluation to show or not show something and conditional ternary operators
    
STOPED AT: 7:48:52
*/
export default function StateExample() {
    const [messages, setMessages] = React.useState(["a","b"])
    const [isShown, setIsShown] = React.useState((messages.length > 0) ? true : false)

    return (
        <div>
            <h1>{isShown ? (`You have ${messages.length} unread ${messages.length===1 ? "message":"message(s)"}!`): "You're all caught up!"}</h1>
        </div>
    )
}