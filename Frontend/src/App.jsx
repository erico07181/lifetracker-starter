import { useState } from "react";

import "./App.css";
import Navbar from "./Navbar/Navbar";
import Landing from "./Landing/Landing";
import Register from "./Navbar/Register/Register";
import Login from "./Navbar/Login/Login";
import Nutrition from "./Nutrition/Nutrition";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  const [user, setUser] = useState({});
  return (
    <div className="app">
      <BrowserRouter>
        <div className="Navbar">
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              path="/register"
              element={<Register user={user} setUser={setUser} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/nutrition" element={<Nutrition />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
