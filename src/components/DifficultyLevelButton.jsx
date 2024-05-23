import "../styles/componentsStyles/DifficultyLevelButton.css";

function DifficultyLevelButton({ difficultyLevel, onClick, levelColor }) {
  return (
    <button
      className="DifficultyLevelButton"
      onClick={onClick}
      style={{ boxShadow: `0px 0px 1vw 0.3vw ${levelColor}` }}
    >
      <p
        style={{
          color: levelColor,
        }}
      >
        {difficultyLevel}
      </p>
    </button>
  );
}

export default DifficultyLevelButton;
