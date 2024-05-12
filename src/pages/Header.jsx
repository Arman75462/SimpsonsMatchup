import { useState } from "react";
import "./../styles/pagesStyles/Header.css";
import Logo from "../components/Logo.jsx";
import ScoreBoard from "../components/ScoreBoard.jsx";

function Header({ isAudioOn }) {
  return (
    <header className="Header">
      <Logo isAudioOn={isAudioOn} />
      <ScoreBoard />
    </header>
  );
}

export default Header;
