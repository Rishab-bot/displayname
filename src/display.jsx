import React, { useState } from "react";

export function DisplayName() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setFullName(`${firstName.trim()} ${lastName.trim()}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Full Name Display</h1>

        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required 
        />
        <br />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required 
        />
        <br />

        <button type="submit">Submit</button>
      </form>

      {fullName && <h2>Full Name: {fullName}</h2>}
    </div>
  );
}
