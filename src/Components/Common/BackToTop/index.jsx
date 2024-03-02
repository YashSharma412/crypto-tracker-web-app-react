import React from "react";
import Button from "../Button";
import NavigationRoundedIcon from "@mui/icons-material/NavigationRounded";
import "./styles.css";
import { Tooltip } from "@mui/material";

const BackToTop = () => {
  let mybutton = document.getElementById("backtoTop-btn");
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 250 ||
      document.documentElement.scrollTop > 250
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <Button
      outlined
      className={"backToTop-btn"}
      id={"backtoTop-btn"}
      onClick={topFunction}
    >
      <Tooltip placement="top" title={"scroll to the top!"} arrow>
        <NavigationRoundedIcon />
      </Tooltip>
    </Button>
  );
};

export default BackToTop;
