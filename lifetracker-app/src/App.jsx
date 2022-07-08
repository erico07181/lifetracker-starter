import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Landing
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <main>
        <BrowserRouter>
          <Navbar />

        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
