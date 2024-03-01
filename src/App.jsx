import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// pages :
import HomePage from "./pages/HomePage.jsx"
import DashBoardPage from "./pages/DashBoardPage.jsx";
import WatchlistPage from "./pages/WatchlistPage.jsx";
import CoinPage from "./pages/CoinPage.jsx";
import Header from "./Components/Common/Header/index.jsx";
import CompareCoinsPage from "./pages/CompareCoinsPage.jsx";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/dashboard" element={<DashBoardPage />}/>
        <Route path="/watchlist" element={<WatchlistPage />}/>
        <Route path="/compare" element={<CompareCoinsPage />}/>
        <Route path="/coin/:id" element={<CoinPage />}/>
      </Routes>
    </div>
  );
}

export default App;
