import { useState } from "react";
import "../styles/componentsStyles/Logo.css";

function Logo() {
  return (
    <img
      src="/src/assets/simpsons-images/The_Simpsons_Logo.webp"
      className="Logo"
      alt="The Simpsons animated sitcom logo"
    />
  );
}

export default Logo;
