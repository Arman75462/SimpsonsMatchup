import { useState } from "react";
import "./../styles/pagesStyles/Header.css";
import SimpsonsLogo from "../components/Logo.jsx";
import ScoreBoard from "../components/ScoreBoard.jsx";

function Header() {
  return (
    <header className="Header">
      <SimpsonsLogo />
      <ScoreBoard />
    </header>
  );
}

export default Header;
