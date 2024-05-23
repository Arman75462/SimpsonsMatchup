import "../styles/componentsStyles/Logo.css";
import logoClickSound from "/public/assets/audio/logoClickSound.mp3";
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
        src="/public/assets/simpsons-images/The_Simpsons_Logo.webp"
        className={className}
        alt="The Simpsons animated sitcom logo"
        onClick={handleLogoClick}
      />
    </>
  );
}

export default Logo;
