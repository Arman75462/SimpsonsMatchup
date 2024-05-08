import { useState } from "react";
import "../styles/pagesStyles/Footer.css";

import InformationCardsContainer from "../components/InformationCardsContainer.jsx";
import UtilityButton from "../components/UtilityButton.jsx";
import volumeOnIcon from "/src/assets/icon-images/volume_on.svg";
import volumeOffIcon from "/src/assets/icon-images/volume_off.svg";
import musicOnIcon from "/src/assets/icon-images/music_on.svg";
import musicOffIcon from "/src/assets/icon-images/music_off.svg";
import questionMarkIcon from "/src/assets/icon-images/question_mark.svg";
import closeIcon from "/src/assets/icon-images/closeIcon.svg";
import simpsonsMusic from "/src/assets/audio/simpsonsMusic.mp3";

function Footer() {
  const [isAudioOn, setIsAudioOn] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [areInformationCardsShown, setAreInformationCardsShown] =
    useState(false);

  const handleClickVolume = () => {
    setIsAudioOn(!isAudioOn);
  };

  const handleClickMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  const handleClickInformationCards = () => {
    setAreInformationCardsShown(!areInformationCardsShown);
  };

  const audioElement = (
    <audio autoPlay loop>
      <source src={simpsonsMusic} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );

  return (
    <footer className="Footer">
      <div className="Footer__volume-icons">
        <UtilityButton
          onClick={handleClickVolume}
          buttonIcon={isAudioOn ? volumeOnIcon : volumeOffIcon}
          alt="Audio icon"
        />

        <UtilityButton
          onClick={handleClickMusic}
          buttonIcon={isMusicPlaying ? musicOnIcon : musicOffIcon}
          alt="Music note icon"
        />

        {/* Conditional statement to start or stop music */}
        {isMusicPlaying ? audioElement : null}
      </div>

      {areInformationCardsShown ? <InformationCardsContainer /> : null}

      <UtilityButton
        onClick={handleClickInformationCards}
        buttonIcon={areInformationCardsShown ? closeIcon : questionMarkIcon}
        alt="Question mark icon"
      />
    </footer>
  );
}

export default Footer;
