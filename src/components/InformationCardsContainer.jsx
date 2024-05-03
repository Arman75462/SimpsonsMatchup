import { useState } from "react";
import "../styles/componentsStyles/InformationCardsContainer.css";
import InformationCard from "../components/InformationCard.jsx";

function InformationCardsContainer() {
  return (
    <div className="InformationCardsContainer">
      <InformationCard text="Don't click on the same card twice!" />
      <InformationCard text="Click on THE SIMPSONS logo to go back." />
    </div>
  );
}

export default InformationCardsContainer;
