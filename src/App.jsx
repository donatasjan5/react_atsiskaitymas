import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

import NavBar from "./components/NavBar/NavBar";

const App = () => {

  const [currentForm, setCurrentForm] = useState('login')
  
  return (
    <>
        <NavBar />
      <Routes>
        <Route path="/login" element={ currentForm === 'login' ? <Login /> : <Register /> } />
        <Route path="/register" element ={<Register />} />
      </Routes>
    </>
  );
};

export default App;
