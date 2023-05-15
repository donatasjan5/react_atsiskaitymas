import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for="email">email</label>
        <input
          value={email}
          type="email"
          placeholder="Enter your email"
          id="email"
          name="email"
        />
        <label for="password">password</label>
        <input
          value={pass}
          type="password"
          placeholder="*********"
          id="password"
          name="password"
        />
        <button type="submit">Log In</button>
      </form>
      <button>Don't have an account? Register here.</button>
    </>
  );
}

export default Login;
