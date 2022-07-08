import { useState } from "react";

import "./App.css";
import Navbar from "./Navbar/Navbar";
import Landing from "./Landing/Landing";
import Register from "./Navbar/Register/Register";
import Login from "./Navbar/Login/Login";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="Navbar">
          <Navbar />
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Landing />
      </BrowserRouter>
    </div>
  );
}

export default App;
