import "../styles/componentsStyles/OutcomeCard.css";
import DefeatImage from "/src/assets/simpsons-images/DefeatImage.webp";
import VictoryImage from "/src/assets/simpsons-images/VictoryImage.webp";

function OutcomeCard({ outcomeStatus, handleRestart, handleBackToMainMenu }) {
  function OutcomeCardStyling() {
    if (outcomeStatus === "Victory") {
      return {
        backgroundImage: `url(${VictoryImage})`,
        boxShadow: "0px 0px 1vw 0.3vw blue",
      };
    } else if (outcomeStatus === "Defeat") {
      return {
        backgroundImage: `url(${DefeatImage})`,
        boxShadow: "0px 0px 1vw 0.3vw red",
      };
    }
  }

  function OutcomeCardResultStyling() {
    if (outcomeStatus === "Victory") {
      return {
        color: "#57A0FF",
      };
    } else if (outcomeStatus === "Defeat") {
      return {
        color: "#F23131",
      };
    }
  }

  return (
    <div className="OutcomeCard__blur">
      <div className="OutcomeCard" style={OutcomeCardStyling()}>
        <p className="OutcomeCard__result" style={OutcomeCardResultStyling()}>
          {outcomeStatus}
        </p>
        {/* Flex container */}
        <div className="OutcomeCard__button-flex-container">
          <button
            className="OutcomeCard__restart-button"
            onClick={handleRestart}
          >
            Restart
          </button>
          <button
            className="OutcomeCard__back-to-main-menu-button"
            onClick={handleBackToMainMenu}
          >
            Main Menu
          </button>
        </div>
      </div>
    </div>
  );
}

export default OutcomeCard;
