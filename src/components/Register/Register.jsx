import React, { useState } from 'react';
import './Register.css';

function Register(props) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name" className="label">
          Full Name
        </label>
        <input
          value={name}
          type="text"
          name="name"
          placeholder="Full Name"
          className="input"
        />

        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          value={email}
          type="email"
          placeholder="Enter your email"
          id="email"
          name="email"
          className="input"
        />

        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          value={pass}
          type="password"
          placeholder="*********"
          id="password"
          name="password"
          className="input"
        />

        <button type="submit" className="button">
          Register
        </button>
      </form>

      <div className="button-container">
        <button onClick={() => props.onFormSwitch('login')} className="switchButton">
          Already have an account? Log In
        </button>
      </div>
    </div>
  );
}

export default Register;
