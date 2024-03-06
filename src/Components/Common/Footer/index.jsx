import React from "react";
import "./styles.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="footer">
      <h2 className="logo" onClick={() => topFunction()}>
        CryptoTracker<span>.</span>
      </h2>
      <div className="social-links">
        <a href="https://www.facebook.com/yash.sharma.56211497" target="_blank">
          <FacebookIcon className="social-link" />
        </a>
        <a href="mailto:sharmayashsatish@gmail.com" target="_blank">
          <EmailIcon className="social-link" />
        </a>
        <a href="https://x.com/yashsharma_412?t=uXOXwrKN5-XUVrgpviR9BA&s=09" target="_blank">
          <XIcon className="social-link" />
        </a>
        <a href="https://www.instagram.com/yash_sharma412?igsh=d3Bpd3ljYWJ1MWF4" target="_blank">
          <InstagramIcon className="social-link" />
        </a>
        <a href="https://www.linkedin.com/in/yashsharma412" target="_blank">
          <LinkedInIcon className="social-link" />
        </a>
        <a href="https://github.com/YashSharma412" target="_blank">
          <GitHubIcon className="social-link" />
        </a>
      </div>
    </div>
  );
}

export default Footer;