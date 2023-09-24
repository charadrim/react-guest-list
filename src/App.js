import React, { useState } from 'react';

export default function App() {
  const [guestInfo, setGuestInfo] = useState({
    firsName: '',
    lastName: '',
  });

  const [guests, setGuests] = useState([
    {
      name: {
        first: '',
        last: '',
        status: 'not attending',
      },
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGuestInfo({ ...guestInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any action with the form data here, such as sending it to an API or displaying it.
    console.log(guestInfo);

    const newGuest = {
      name: {
        first: guestInfo.firstName,
        last: guestInfo.lastName,
        status: 'not attending',
      },
    };

    setGuests([...guests, newGuest]);

    setGuestInfo({ firstName: '', lastName: '' });
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
      <h2>Guests so far:</h2>
      <ul>
        {guests.map((guest, index) => (
          <li key={index}>
            {guest.name.first} {guest.name.last} - {guest.name.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
