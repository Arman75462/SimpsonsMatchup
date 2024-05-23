import "../styles/componentsStyles/InformationCardsContainer.css";
import InformationCard from "../components/InformationCard.jsx";

function InformationCardsContainer() {
  return (
    <div className="InformationCardsContainer">
      <InformationCard text="Don't click the same card twice!" />
      <InformationCard text="Click the SIMPSONS logo to return to the main menu!" />
    </div>
  );
}

export default InformationCardsContainer;
