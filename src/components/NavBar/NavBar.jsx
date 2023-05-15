import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useAuth } from "../auth/Auth";

function NavBar() {
  const auth = useAuth();

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add</Link>
          </li>
          {/* <li>
            <Link to="/login">Login</Link>
          </li> */}
          <li>
            <Link to="/register">Register</Link>
          </li>

          <li>{!auth.user && <Link to="/login">Login</Link>}</li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
