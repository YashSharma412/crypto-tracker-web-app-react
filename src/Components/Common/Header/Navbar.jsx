import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Button from "../Button";
import ThemeToggle from "../../LandingPage/ThemeToggle";
const Navbar = ({isMob}) => {
  const navigate = useNavigate()
  return (
    <ul className="navbar__links drawer">
      <li>
        <ThemeToggle />
      </li>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/watchlist">WatchList</NavLink>
      </li>
      <li>
        <NavLink to="/compare">Compare</NavLink>
      </li>
      <li>
        { isMob ? <NavLink to={"/dashboard"}>Dashboard</NavLink> :
          <Button
            text={"Dashboard"}
            onClick={() => navigate("/dashboard")}
          />
        }
      </li>
    </ul>
  );
};

export default Navbar;
 