// App.js
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Textutils from "./components/Textutils";
import Login from "./Login";

const App = () => {
  // Initialize state from localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  // Update localStorage whenever the login status changes
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <Router>
      <Navbar  />

      <Routes>
        {/* Login Route */}
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/about" />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />

        {/* Protected Routes */}
        <Route
          path="/about"
          element={isLoggedIn ? <About /> : <Navigate to="/login" />}
        />
        <Route
          path="/textform"
          element={
            isLoggedIn ? (
              <Textutils h1="Enter Your Text Here To See Magic" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/textutils"
          element={isLoggedIn ? <TextForm /> : <Navigate to="/login" />}
        />

        {/* Default Route */}
        <Route
          path="/"
          element={
            isLoggedIn ? <Navigate to="/about" /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
