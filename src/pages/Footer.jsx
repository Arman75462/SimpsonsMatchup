import { useState, useEffect } from "react";
import "../styles/pagesStyles/Footer.css";

import InformationCardsContainer from "../components/InformationCardsContainer.jsx";
import SoundButton from "../components/SoundButton.jsx";
import volumeOnIcon from "/src/assets/icon-images/volume_on.svg";
import volumeOffIcon from "/src/assets/icon-images/volume_off.svg";
import musicOnIcon from "/src/assets/icon-images/music_on.svg";
import musicOffIcon from "/src/assets/icon-images/music_off.svg";
import questionMarkIcon from "/src/assets/icon-images/question_mark.svg";
import closeIcon from "/src/assets/icon-images/closeIcon.svg";
import simpsonsMusic from "/src/assets/audio/simpsonsMusic.mp3";
import buttonClickSound from "/src/assets/audio/buttonClickSound.mp3";
import { playSound } from "/src/utils.js";

function Footer({ isAudioOn, setIsAudioOn }) {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [areInformationCardsShown, setAreInformationCardsShown] =
    useState(false);

  useEffect(() => {
    document.body.style.overflow = areInformationCardsShown ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [areInformationCardsShown]);

  const handleClickVolume = () => {
    if (isAudioOn) {
      playSound(buttonClickSound);
    }
    setIsAudioOn(!isAudioOn);
  };

  const handleClickMusic = () => {
    if (isAudioOn) {
      playSound(buttonClickSound);
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

  const handleClickInformationCards = () => {
    if (isAudioOn) {
      playSound(buttonClickSound);
    }
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
        <SoundButton
          onClick={handleClickVolume}
          buttonIcon={isAudioOn ? volumeOnIcon : volumeOffIcon}
          alt="Audio icon"
        />

        <SoundButton
          onClick={handleClickMusic}
          buttonIcon={isMusicPlaying ? musicOnIcon : musicOffIcon}
          alt="Music note icon"
        />

        {/* Conditional statement to start or stop music */}
        {isMusicPlaying ? audioElement : null}
      </div>

      {areInformationCardsShown ? <InformationCardsContainer /> : null}

      <SoundButton
        onClick={handleClickInformationCards}
        buttonIcon={areInformationCardsShown ? closeIcon : questionMarkIcon}
        alt="Question mark icon"
      />
    </footer>
  );
}

export default Footer;
