import React, { useState } from 'react';
import axios from 'axios';

function UserRegistration() {
  const [username, setUsername] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleRegistration = async () => {
    try {
      // Make an API call to register the user
      const response = await axios.post('/users/create', {
        username,
      });

      if (response.status === 200) {
        // Registration successful
        setRegistrationStatus('User registered successfully');
      } else {
        // Handle registration error
        setRegistrationStatus('Registration failed');
      }
    } catch (error) {
      // Handle network or other errors
      setRegistrationStatus('Registration failed');
    }
  };

  return (
    <div className="user-registration">
      <h2>User Registration</h2>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
      </div>
      <button onClick={handleRegistration}>Register</button>
      <p className="registration-status">{registrationStatus}</p>
    </div>
  );
}

export default UserRegistration;
