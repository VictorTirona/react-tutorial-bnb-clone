import React from "react" //you can also destructure useState to make your code cleaner

//STATE EXAMPLE NUMBER 6: Using an object as state and updating the object by clicking components


export default function StateExample() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
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

    let starIcon = (contact.isFavorite) ? "star-fill.png" : "star-no-fill.png";

    return (
        <main>
            <article className="card">
                <div className="card--info">
                    <img src={'./ramen.png'} width='100px' />
                    <img src={`../images/${starIcon}`} onClick={toggleFavorite} width='100px' />
                    <h2>{`${contact.firstName} ${contact.lastName}`}</h2>
                    <p>{`${contact.phone}`}</p>
                    <p>{`${contact.email}`}</p>
                </div>
            </article>
        </main>
    )
}