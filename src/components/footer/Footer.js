import React from 'react';
import logo from "../../assets/logo.png";
import "./Footer.css";

const Footer = () => {
    return (
      <footer>
        <span>©2023 |<img src={logo} alt="" /></span>
      </footer>
    );
  }

export default Footer;