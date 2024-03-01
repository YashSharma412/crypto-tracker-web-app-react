import React, { useEffect } from "react";
import "./style.css";
import TemporaryDrawer from "./Drawer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
const Header = () => {
  useEffect(() => {
    console.log("<<<<<--- Header Mounts --->>>>>");
    const interval = setInterval(() => {
      if (localStorage.getItem("allCoins")) {
        console.log("clearing local storage...")
        localStorage.removeItem("allCoins");
      } else {
        console.log("Warning: interval ticks")
      }
    }, 3*60*1000);
    return () => {
      clearInterval(interval);
      if(localStorage.getItem("allCoins")){
        localStorage.removeItem("allCoins");
      }
      console.log("<<<<<--- Header Unmounts --->>>>>");
    };
  }, []);

  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <h1 className="logo" onClick={() => navigate("/")}>
        CryptoTracker<span>.</span>
      </h1>
      <Navbar />
      <div className="mobile__drawer">
        <TemporaryDrawer />
      </div>
    </nav>
  );
};

export default Header;
