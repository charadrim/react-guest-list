import React, { useState } from 'react';
import GuestForm from './GuestForm';
import GuestList from './GuestList';

export default function App() {
  const [guests, setGuests] = useState([]);
  return (
    <div>
      <GuestForm />
    </div>
  );
}
