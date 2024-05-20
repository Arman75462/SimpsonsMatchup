import { useState } from "react";
import "../styles/componentsStyles/SoundButton.css";

function SoundButton({ buttonIcon, onClick, alt }) {
  return (
    <button
      className="SoundButton"
      onClick={onClick}
      alt={alt}
      style={{ backgroundImage: `url(${buttonIcon})` }}
    ></button>
  );
}

export default SoundButton;
