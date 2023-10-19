import React from "react";
import logo from "../assets/img/logo.png";

const Footer = () => {
  return (
    <footer className="shrink bg-stone-900 flex gap-x-2 items-center justify-center py-5 z-10">
      <span className="text-stone-300 font-inter font-semibold">©{new Date().getFullYear()}</span>
      <span className="bg-stone-300 w-px h-8"></span>
      <img className="h-6" src={logo} alt="Footer logo" />
    </footer>
  );
};

export default Footer;
