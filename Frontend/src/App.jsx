import { useState } from "react";

import "./App.css";
import Navbar from "./Navbar/Navbar";
import Landing from "./Landing/Landing";
import Register from "./Navbar/Register/Register";
import Login from "./Navbar/Login/Login";
import Nutrition from "./Nutrition/Nutrition";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import apiClient from "../services/apiClient";
import Activity from "./Activity/Activity";
import Exercise from "./Exercise/Exercise";
import { useEffect } from "react";

export default function App() {
  const [user, setUser] = useState({});
  const [appState, setAppState] = useState({});
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await apiClient.fetchUserFromToken();
      if (data) {
        setIsLoggedIn(true);
        setUser(data.user);
      }
      if (error) setError(error);
    };

    const token = localStorage.getItem("lifetracker_token");
    if (token) {
      apiClient.setToken(token);
      fetchUser();
    }
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <div className="Navbar">
          <Navbar
            user={user}
            setUser={setUser}
            setAppState={setAppState}
            setIsLoggedIn={setIsLoggedIn}
            isLoggedIn={isLoggedIn}
            appState={appState}
          />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              path="/register"
              element={
                <Register
                  user={user}
                  setUser={setUser}
                  setAppState={setAppState}
                  setIsLoggedIn={setIsLoggedIn}
                  isLoggedIn={isLoggedIn}
                  appState={appState}
                />
              }
            />
            <Route
              path="/login"
              element={
                <Login
                  setAppState={setAppState}
                  user={user}
                  setUser={setUser}
                  setIsLoggedIn={setIsLoggedIn}
                  isLoggedIn={isLoggedIn}
                />
              }
            />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route
              path="/activity"
              element={
                <Activity
                  setAppState={setAppState}
                  appState={appState}
                  user={appState?.user}
                  setIsLoggedIn={setIsLoggedIn}
                  isLoggedIn={isLoggedIn}
                />
              }
            />
            <Route
              path="/exercise"
              element={
                <Exercise
                  setAppState={setAppState}
                  user={appState?.user}
                  setUser={setUser}
                  setIsLoggedIn={setIsLoggedIn}
                  isLoggedIn={isLoggedIn}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
