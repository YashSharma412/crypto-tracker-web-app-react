import React, { useState, useEffect } from "react";
import Button from "../Button";
import NavigationRoundedIcon from "@mui/icons-material/NavigationRounded";
import { Tooltip } from "@mui/material";
import "./styles.css";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button
      className={`backToTop-btn ${visible ? "" : "hidden"}`}
      outlined
      onClick={scrollToTop}
    >
      <Tooltip placement="top" title="Scroll to the top!" arrow>
        <NavigationRoundedIcon
          className="top-arrow"
        />
      </Tooltip>
    </Button>
  );
};

export default BackToTop;
