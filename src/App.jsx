import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage.jsx"
import DashBoardPage from "./pages/DashBoardPage.jsx";
import ComparePage from "./pages/ComparePage.jsx";
import WatchlistPage from "./pages/WatchlistPage.jsx";
import CoinPage from "./pages/CoinPage.jsx";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/dashboard" element={<DashBoardPage />}/>
        <Route path="/watchlist" element={<WatchlistPage />}/>
        <Route path="/compare" element={<ComparePage />}/>
        <Route path="/coin/:id" element={<CoinPage />}/>
      </Routes>
    </div>
  );
}

export default App;
