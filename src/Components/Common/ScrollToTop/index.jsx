import React, { useState } from "react";
import Button from "../Button";
import NavigationRoundedIcon from "@mui/icons-material/NavigationRounded";
import { Tooltip } from "@mui/material";
import "./style.css"; // Assuming you have a CSS file for styling

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 250) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Add scroll event listener when component mounts
  // and remove it when component unmounts
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Button
      outlined
      className={isVisible ? "ScrollToTop-btn" : "ScrollToTop-btn hidden"}
      onClick={scrollToTop}
    >
      <Tooltip placement="top" title="Scroll to the top!" arrow>
        <NavigationRoundedIcon />
      </Tooltip>
    </Button>
  );
};

export default ScrollToTop;