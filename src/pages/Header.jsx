import { useState } from "react";
import "./../styles/pagesStyles/Header.css";
import Logo from "../components/Logo.jsx";
import ScoreBoard from "../components/ScoreBoard.jsx";

function Header({
  isAudioOn,
  isMainMenuShowing,
  setIsMainMenuShowing,
  currentScore,
  bestScore,
}) {
  return (
    <header className="Header">
      <Logo
        isAudioOn={isAudioOn}
        className="LogoHeader"
        isMainMenuShowing={isMainMenuShowing}
        setIsMainMenuShowing={setIsMainMenuShowing}
      />
      <ScoreBoard currentScore={currentScore} bestScore={bestScore} />
    </header>
  );
}

export default Header;
