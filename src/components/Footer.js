import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/fitlife_logo.png";
import fbIcon from "../assets/icons/fbIcon.svg";
import instaIcon from "../assets/icons/instaIcon.svg";

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      {/* Logo Section */}
      <div className="footer-logo">
        <img src={Logo} alt="FitLife Hub Logo" className="footer-logo-img" />
      </div>

      {/* Navigation Links */}
      <div className="footer-nav">
        <a href="/" className="footer-link">
          Home
        </a>
        <a href="/#exercises" className="footer-link">
          Exercises
        </a>
        <a href="/supplementation" className="footer-link">
          Supplements
        </a>
        <a href="/about" className="footer-link">
          About
        </a>
      </div>

      {/* Social Media Icons */}
      <div className="footer-social">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
        >
          <img src={fbIcon} alt="Facebook" className="footer-social-icon" />
        </a>

        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
        >
          <img src={instaIcon} alt="Instagram" className="footer-social-icon" />
        </a>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="footer-bottom">
      <p>&copy; 2024 FitLife Hub. All rights reserved.</p>
    </div>
  </footer>
);
// const Footer = () => (
//   <Box mt="80px" bgcolor="#FFF3F4">
//     <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
//       <img src={Logo} alt="logo" style={{ width: '200px', height: '80px' }} />
//     </Stack>
//     <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px"></Typography>
//   </Box>
// );

export default Footer;
