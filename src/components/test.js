import React from 'react';

export default function Test() {
    const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]
    return (
        <div>
            {colors}
        </div>
    )
}

function addTags(text, tag) {
    const endTag = `${tag[0]}/${tag.slice(1)}`
    const htmlText = text.map(function (x) {
        return (`${tag}${x}${endTag}`)
    })
    console.log(htmlText)
    return htmlText
}