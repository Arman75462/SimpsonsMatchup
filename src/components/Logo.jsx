import "../styles/componentsStyles/Logo.css";
import logoClickSound from "/src/assets/audio/logoClickSound.mp3";
import { playSound } from "/src/utils.js";

function Logo({
  isAudioOn,
  className = "",
  isMainMenuShowing,
  setIsMainMenuShowing,
  setCurrentScore,
}) {
  const handleLogoClick = () => {
    if (className === "LogoHeader") {
      setIsMainMenuShowing?.(!isMainMenuShowing);
      setCurrentScore(0);

      if (isAudioOn) {
        playSound(logoClickSound);
      }
    }
  };

  return (
    <>
      <img
        src="/src/assets/simpsons-images/The_Simpsons_Logo.webp"
        className={className}
        alt="The Simpsons animated sitcom logo"
        onClick={handleLogoClick}
      />
    </>
  );
}

export default Logo;
