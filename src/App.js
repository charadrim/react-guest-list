import React, { useState } from 'react';
import GuestForm from './GuestForm';
import GuestList from './GuestList';

export default function App() {
  const [guests, setGuests] = useState([]);
  const handleInputChange = (event) => {
    setGuests(event.target.value);
  };

  const handleBtnClick = () => {
    console.log(guests);
  };

  return (
    <div className="App">
      <h1>Guest List App</h1>
      <div>
        <label htmlFor="first-name">First Name:</label>
        <input
          type="text"
          id="first-name"
          name="name"
          value={guests}
          onChange={handleInputChange}
        ></input>
        <br />
        <label htmlFor="last-name">Last Name:</label>
        <input type="text" id="last-name" name="last"></input>
        <br />
        <button onClick={handleBtnClick}>Return</button>
      </div>
    </div>
  );
}
