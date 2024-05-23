import { useState, useEffect } from "react";
import "../styles/pagesStyles/Footer.css";

import InformationCardsContainer from "../components/InformationCardsContainer.jsx";
import UtilityButton from "../components/UtilityButton.jsx";
import volumeOnIcon from "/src/assets/icon-images/volumeOn.png";
import volumeOffIcon from "/src/assets/icon-images/volumeOff.png";
import musicOnIcon from "/src/assets/icon-images/musicOn.png";
import musicOffIcon from "/src/assets/icon-images/musicOff.png";
import questionMarkIcon from "/src/assets/icon-images/questionMark.png";
import closeIcon from "/src/assets/icon-images/closeIcon.png";
import simpsonsMusic from "/src/assets/audio/simpsonsMusic.mp3";
import buttonClickSound from "/src/assets/audio/buttonClickSound.mp3";
import { playSound } from "/src/utils.js";

function Footer({ isAudioOn, setIsAudioOn }) {
  // State to manage whether background music is playing or not.
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  // State to manage the visibility of the information cards.
  const [areInformationCardsShown, setAreInformationCardsShown] =
    useState(false);

  // Disable scrolling when InformationCardsContainer is visible
  useEffect(() => {
    document.body.style.overflow = areInformationCardsShown ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [areInformationCardsShown]);

  // Handler for toggling all of the audios on and off except for the simpsons music.
  const handleClickVolume = () => {
    if (isAudioOn) {
      playSound(buttonClickSound); // Play click sound if isAudioOn state is true.
    }
    setIsAudioOn(!isAudioOn); // Toggle audio state.
  };

  // Handler for toggling the simpsons music on and off.
  const handleClickMusic = () => {
    if (isAudioOn) {
      playSound(buttonClickSound); // Play click sound if isAudioOn state is true.
    }
    setIsMusicPlaying(!isMusicPlaying); // Toggle music state.
  };

  // Handler for showing or hiding the information cards.
  const handleClickInformationCards = () => {
    if (isAudioOn) {
      playSound(buttonClickSound); // Play click sound if isAudioOn state is true.
    }
    setAreInformationCardsShown(!areInformationCardsShown); // Toggle information cards visibility.
  };

  // Audio element to play simpsons music when isMusicPlaying state is true.
  const audioElement = (
    <audio autoPlay loop>
      <source src={simpsonsMusic} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );

  return (
    <footer className="Footer">
      <div className="Footer__volume-icons">
        {/* Button to toggle all audio except the simpsons music on and off */}
        <UtilityButton
          onClick={handleClickVolume}
          buttonIcon={isAudioOn ? volumeOnIcon : volumeOffIcon}
          alt="Audio icon"
        />

        {/* Button to toggle simpsons music on and off */}
        <UtilityButton
          onClick={handleClickMusic}
          buttonIcon={isMusicPlaying ? musicOnIcon : musicOffIcon}
          alt="Music note icon"
        />

        {/* Conditional rendering to play simpsons music by placing audio element here if isMusicPlaying is true */}
        {isMusicPlaying ? audioElement : null}
      </div>

      {/* Conditional rendering to show information cards if areInformationCardsShown is true */}
      {areInformationCardsShown ? <InformationCardsContainer /> : null}

      {/* Button to toggle the visibility of the information cards */}
      <UtilityButton
        onClick={handleClickInformationCards}
        buttonIcon={areInformationCardsShown ? closeIcon : questionMarkIcon}
        alt="Question mark icon"
      />
    </footer>
  );
}

export default Footer;
