import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
export default function TemporaryDrawer() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <MenuRoundedIcon className="menu" />
      </IconButton>
      <Drawer
        anchor={"right"}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: "45vw",
            backgroundColor: "transparent",
          },
        }}
      >
        <ul className="navbar__links drawer">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to={"/watchlist"}>WatchList</NavLink>
          </li>
          <li>
            <NavLink to={"/compare"}>Compare</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
        </ul>
      </Drawer>
    </div>
  );
}
