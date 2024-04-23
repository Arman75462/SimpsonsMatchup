import { useState } from "react";
import "./../styles/pagesStyles/Header.css";
import SimpsonsLogo from "../components/Logo.jsx";

function Header() {
  return (
    <header className="Header">
      <SimpsonsLogo />
    </header>
  );
}

export default Header;
