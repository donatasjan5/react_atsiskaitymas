import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Add from "./components/Add/Add";
import NavBar from "./components/NavBar/NavBar";

import { AuthProvider } from "./components/auth/Auth";
// import { useNavigate } from "react-router-dom";

const App = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const isLoggedIn = localStorage.getItem("isLoggedIn");
  //   if (!isLoggedIn) {
  //     navigate();
  //   }
  // }, [navigate]);

  const [currentForm, setCurrentForm] = useState("login");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  const handleAddItems = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        setItems(data.prekes);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route
            path="/login"
            element={
              currentForm === "login" ? (
                <Login onFormSwitch={toggleForm} />
              ) : (
                <Register onFormSwitch={toggleForm} />
              )
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home items={items} loading={loading} />} />
          <Route path="/add" element={<Add onAdd={handleAddItems} />} />
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;
