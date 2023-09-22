/*import React, { useState } from 'react';

export default function GuestForm() {
  const [guestInfo, setGuestInfo] = useState([{ firstName: '', lastName: '' }]);
  const [showGuestInfo, setShowGuestInfo] = useState(false);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setGuestInfo({ ...guestInfo, [name]: value });
  };

  const handleBtnClick = () => {
    setShowGuestInfo(true);
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
            value={guestInfo.firstName}
            onChange={handleInputChange}
          ></input>
          <br />
          <label htmlFor="last-name">Last Name: </label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            value={guestInfo.lastName}
            onChange={handleInputChange}
          ></input>
          <br />
          <button onClick={handleBtnClick}>Return</button>
        </form>
        <div>
          {showGuestInfo && (
            <div>
              <p>First Name: {guestInfo.firstName}</p>

              <p>Last Name: {guestInfo.lastName}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}*/
