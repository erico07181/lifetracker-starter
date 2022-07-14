import { useState } from "react";

import "./App.css";
import Navbar from "./Navbar/Navbar";
import Landing from "./Landing/Landing";
import Register from "./Navbar/Register/Register";
import Login from "./Navbar/Login/Login";
import Nutrition from "./Nutrition/Nutrition";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Activity from "./Activity/Activity";
import Exercise from "./Exercise/Exercise";

function App() {
  const [user, setUser] = useState({});
  const [appState, setAppState] = useState({});

  return (
    <div className="app">
      <BrowserRouter>
        <div className="Navbar">
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              path="/register"
              element={
                <Register
                  user={user}
                  setUser={setUser}
                  setAppState={setAppState}
                />
              }
            />
            <Route
              path="/login"
              element={<Login setAppState={setAppState} />}
            />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route
              path="/activity"
              element={
                <Activity
                  setAppState={setAppState}
                  appState={appState}
                  user={appState?.user}
                />
              }
            />
            <Route
              path="/exercise"
              element={
                <Exercise setAppState={setAppState} user={appState?.user} />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
