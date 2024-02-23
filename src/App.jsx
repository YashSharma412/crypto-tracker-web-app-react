import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage.jsx"
import DashBoardPage from "./pages/DashBoardPage.jsx";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/dashboard" element={<DashBoardPage />}/>
      </Routes>
    </div>
  );
}

export default App;
