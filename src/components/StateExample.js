import React from "react" //you can also destructure useState to make your code cleaner
import Star from "./Star.js"

/*State Example #9: BOXES CHALLENGE Part 1
*/
export default function StateExample() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })

    function toggleFavorite() {
        setContact(function (oldStateObj) {
            return ({
                ...oldStateObj,
                isFavorite: !oldStateObj.isFavorite
            }
            )
        })
    }

    return (
        <main>
            <article className="card">
                <div className="card--info">
                    <img src={'./ramen.png'} width='100px' />
                    <Star
                        isFilled={contact.isFavorite} 
                        handleClick={toggleFavorite} //we are passing the toggleFavorite function as a PROP. Then it'll get used within the child component to update the state. handleClick is the best practice name in order to make it obvious that this is a PROP and not an event listener
                    />
                    <h2>{`${contact.firstName} ${contact.lastName}`}</h2>
                    <p>{`${contact.phone}`}</p>
                    <p>{`${contact.email}`}</p>
                </div>
            </article>
        </main>
    )
}