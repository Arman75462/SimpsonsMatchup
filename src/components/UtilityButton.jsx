import "../styles/componentsStyles/UtilityButton.css";

function UtilityButton({ buttonIcon, onClick, alt }) {
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
