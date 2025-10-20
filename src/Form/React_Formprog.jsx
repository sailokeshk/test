//d. Write a React program to implement the forms in react
import React, { useState } from 'react';

const SimpleForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
     alert(`Name:${name}:${email}`);
    setName("");
    setEmail("");
  };
  return (
    <div>
      <h2>Simple React Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default SimpleForm;