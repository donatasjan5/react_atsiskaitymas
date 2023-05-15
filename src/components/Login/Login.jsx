import React, { useState } from "react";
import "./Login.css";

function Login(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          value={email}
          type="email"
          placeholder="Enter your email"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={pass}
          type="password"
          placeholder="*********"
          id="password"
          name="password"
        />

        <button type="submit">Log In</button>
      </form>
      <button onClick={() => props.onFormSwitch("register")}>
        Don't have an account? Register here.
      </button>
    </div>
  );
}

export default Login;
