import React, { useEffect, useState } from "react";

export function DisplayName(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();
        setFullName(`${firstName} ${lastName}`)
    } 

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Full Name Display</h1>
                <label htmlFor="firstName">First Name</label>
                <input 
                type="text" 
                name="first" 
                id="firstName"
                onChange={(e)=>setFirstName(e.target.value)}
                />
                <br/>
                <label htmlFor="secondName">Last Name</label>
                <input 
                type="text" 
                name="second" 
                id="secondName"
                onChange={(e)=>setLastName(e.target.value)}
                />
                <br/>
                <button>Submit</button>
            </form>

            {fullName && <h2>Full Name: {fullName}</h2>}
        </div>
    );
}