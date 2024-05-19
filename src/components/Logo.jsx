import { useState } from "react";
import "../styles/componentsStyles/Logo.css";
import logoClickSound from "/src/assets/audio/logoClickSound.mp3";

function Logo({
  isAudioOn,
  className = "",
  isMainMenuShowing,
  setIsMainMenuShowing,
}) {
  const handleLogoClick = () => {
    if (className === "LogoHeader") {
      setIsMainMenuShowing?.(!isMainMenuShowing);
      if (isAudioOn) {
        // Create an audio element and play it
        const audio = new Audio(logoClickSound);
        audio.play();
      }
    }
  };

  return (
    <>
      <img
        src="/src/assets/simpsons-images/The_Simpsons_Logo.webp"
        className={className}
        alt="The Simpsons animated sitcom logo"
        onClick={handleLogoClick}
      />
    </>
  );
}

export default Logo;
