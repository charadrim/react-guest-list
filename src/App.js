import React, { useState } from 'react';

/*import GuestForm from './GuestForm';
import GuestList from './GuestList';

export default function App() {
  const [guests, setGuests] = useState([]);
  return (
    <div>

    </div>
  );
}*/

export default function GuestForm() {
  const [guests, setGuests] = useState([
    { firstName: '', lastName: '', status: 'not attending' },
  ]);
  const [showGuest, setShowGuest] = useState(false);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setGuests((previousGuest) => ({
      ...previousGuest,
      [name]: value,
    }));
  };

  const handleBtnClick = () => {
    event.preventDefault();
    setShowGuest(true);
  };

  return (
    <div className="GuestForm">
      <h1>Guest List:</h1>
      <div>
        <form>
          <label htmlFor="first-name">First Name: </label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            value={guests.firstName}
            onChange={handleInputChange}
          ></input>
          <br />
          <label htmlFor="last-name">Last Name: </label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            value={guests.lastName}
            onChange={handleInputChange}
          ></input>
          <br />
          <button onClick={handleBtnClick}>Return</button>
        </form>
        <div>
          {showGuest && (
            <div>
              <p>First Name: {guests.firstName}</p>

              <p>Last Name: {guests.lastName}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
