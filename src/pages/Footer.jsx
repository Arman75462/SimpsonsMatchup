import { useState } from "react";
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

function Footer({ isAudioOn, setIsAudioOn }) {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [areInformationCardsShown, setAreInformationCardsShown] =
    useState(false);

  const handleClickVolume = () => {
    playButtonClickSound();
    setIsAudioOn(!isAudioOn);
  };

  const handleClickMusic = () => {
    playButtonClickSound();
    setIsMusicPlaying(!isMusicPlaying);
  };

  const handleClickInformationCards = () => {
    playButtonClickSound();
    setAreInformationCardsShown(!areInformationCardsShown);
  };

  const audioElement = (
    <audio autoPlay loop>
      <source src={simpsonsMusic} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );

  const playButtonClickSound = () => {
    if (isAudioOn) {
      // Create an audio element and play it
      const audio = new Audio(buttonClickSound);
      audio.play();
    }
  };

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
