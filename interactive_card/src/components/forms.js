import React, { useState } from "react";

function Forms() {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('The card name is ${name}, and teh number is ${number}')
    };

    return (
        <form onSubmit={handleSubmit} >
            <label>
            CARHOLDER NAME:
            <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder = "e.g. Jane Appleseed"
            />
            </label>
            <label>
            CARD NUMBER:
            <input
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder = "e.g. 1234 5678 9123 0000"
            />
            </label>
            <button type="submit">Confirm</button>
        </form>
    );
}

export default Forms;