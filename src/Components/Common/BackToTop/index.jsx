import React, { useState, useEffect } from "react";
import Button from "../Button";
import NavigationRoundedIcon from "@mui/icons-material/NavigationRounded";
import { Tooltip } from "@mui/material";
import "./styles.css";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Button className={`backToTop-btn ${isVisible ? "visible" : ""}`} onClick={scrollToTop}>
      <Tooltip placement="top" title="Scroll to the top!" arrow>
        <NavigationRoundedIcon />
      </Tooltip>
    </Button>
  );
};

export default BackToTop;