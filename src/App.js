import React, { useEffect, useState } from 'react';

const baseUrl = 'http://localhost:4000';

export default function App() {
  const [guestInfo, setGuestInfo] = useState({
    firsName: '',
    lastName: '',
  });

  const [guests, setGuests] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGuestInfo({ ...guestInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any action with the form data here, such as sending it to an API or displaying it.

    const newGuest = {
      name: {
        first: guestInfo.firstName,
        last: guestInfo.lastName,
        status: false,
      },
    };

    setGuests([...guests, newGuest]);

    setGuestInfo({ firstName: '', lastName: '' });
  };

  const toggleStatus = (index) => {
    const updatedGuests = [...guests];

    updatedGuests[index].name.status = updatedGuests[index].name.status =
      !updatedGuests[index].name.status;
    setGuests(updatedGuests);
  };

  const removeGuest = (index) => {
    const updatedGuests = [...guests];
    updatedGuests.splice(index, 1);
    setGuests(updatedGuests);
  };

  return (
    <div>
      <h1>Guest List App:</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={guestInfo.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={guestInfo.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Return</button>
      </form>
      <div data-test-id="guest">
        <h2>Guests so far:</h2>
        <ul>
          {guests.map((guest, index) => (
            <li key={index}>
              {guest.name.first} {guest.name.last} - {''}
              <input
                type="checkbox"
                checked={guest.name.status}
                onChange={() => toggleStatus(index)}
                aria-label={`${guest.name.first} ${guest.name.last} ${
                  guest.name.status ? 'Attending' : 'Not Attending'
                } status`}
              />
              {guest.name.status ? 'Attending' : 'Not Attending'}
              <button onClick={() => removeGuest(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
