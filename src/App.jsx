import React, { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
// pages :
import HomePage from "./pages/HomePage.jsx";
import DashBoardPage from "./pages/DashBoardPage.jsx";
import WatchlistPage from "./pages/WatchlistPage.jsx";
import CoinPage from "./pages/CoinPage.jsx";
import CompareCoinsPage from "./pages/CompareCoinsPage.jsx";
import Header from "./Components/Common/Header/index.jsx";
import Footer from "./Components/Common/Footer/index.jsx";
import BackToTop from "./Components/Common/BackToTop/index.jsx";

function App() {

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="/watchlist" element={<WatchlistPage />} />
        <Route path="/compare" element={<CompareCoinsPage />} />
        <Route path="/coin/:id" element={<CoinPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
