import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

import NavBar from "./components/NavBar/NavBar";

const App = () => {

  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formName) => {
setCurrentForm(formName)
  }
  
  return (
    <>
        <NavBar />
      <Routes>
        <Route path="/login" element={ currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} /> } />
        <Route path="/register" element ={<Register />} />
      </Routes>
    </>
  );
};

export default App;
