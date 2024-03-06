import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import Navbar from "./Navbar";
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
        <Navbar isMob={true}/>
      </Drawer>
    </div>
  );
}
