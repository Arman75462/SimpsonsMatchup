import "../styles/componentsStyles/UtilityButton.css";

function UtilityButton({ buttonIcon, onClick, alt }) {
  function backgroundImageIcon() {
    return {
      backgroundImage: `url(${buttonIcon})`,
    };
  }

  return (
    <button
      className="UtilityButton"
      onClick={onClick}
      alt={alt}
      style={backgroundImageIcon()}
    ></button>
  );
}

export default UtilityButton;
