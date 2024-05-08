import { useState } from "react";
import "../styles/componentsStyles/UtilityButton.css";

function UtilityButton({ buttonIcon, onClick, alt }) {
  const handleButtonClick = () => {
    // Create an audio element and play it
    const audio = new Audio(logoButtonSound);
    audio.play();
  };

  return (
    <button
      className="UtilityButton"
      onClick={onClick}
      alt={alt}
      style={{ backgroundImage: `url(${buttonIcon})` }}
    ></button>
  );
}

export default UtilityButton;
