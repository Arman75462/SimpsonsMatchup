import { useState } from "react";
import "./../styles/pagesStyles/Header.css";
import SimpsonsLogo from "../assets/The_Simpsons_Logo.webp";

function Header() {
  return (
    <header className="Header">
      <img src={SimpsonsLogo} alt="The Simpsons Logo" />
    </header>
  );
}

export default Header;
