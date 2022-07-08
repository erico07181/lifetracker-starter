import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Landing from "./Landing/Landing";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="Navbar">
          <Navbar />
        </div>
        <Landing />
      </BrowserRouter>
    </div>
  );
}

export default App;
