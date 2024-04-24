import { useState } from "react";
import "../styles/componentsStyles/UtilityButton.css";

function UtilityButton({ buttonIcon, alt, onClick }) {
  return (
    <button className="UtilityButton" onClick={onClick}>
      <img src={buttonIcon} alt={alt} />
    </button>
  );
}

export default UtilityButton;
