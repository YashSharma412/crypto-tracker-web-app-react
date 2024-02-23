import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
const Navbar = () => {
  const navigate = useNavigate()
  return (
    <ul className="navbar__links drawer">
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
        {/* <NavLink> */}
          <Button
            text={"Dashboard"}
            onClick={() => navigate("/dashboard")}
          />
        {/* </NavLink> */}
      </li>
    </ul>
  );
};

export default Navbar;
 