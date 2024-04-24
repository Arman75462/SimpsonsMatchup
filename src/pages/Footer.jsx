import { useState } from "react";
import "../styles/pagesStyles/Footer.css";
import UtilityButton from "../components/UtilityButton.jsx";
import volumeOn from "/src/assets/volume_on.svg";
import volumeOff from "/src/assets/volume_off.svg";
import musicOn from "/src/assets/music_on.svg";
import musicOff from "/src/assets/music_off.svg";
import questionMark from "/src/assets/question_mark.svg";
import SimpsonsAudio from "/src/assets/SimpsonsAudio.mp3";

function Footer() {
  const [isAudioOn, setIsAudioOn] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const handleClickVolume = () => {
    setIsAudioOn(!isAudioOn);
  };

  const handleClickMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  const audioElement = (
    <audio autoPlay loop>
      <source src={SimpsonsAudio} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );

  return (
    <footer className="Footer">
      <div className="Footer__volume-icons">
        <UtilityButton
          onClick={handleClickVolume}
          buttonIcon={isAudioOn ? volumeOn : volumeOff}
        />

        <UtilityButton
          onClick={handleClickMusic}
          buttonIcon={isMusicPlaying ? musicOn : musicOff}
        />

        {isMusicPlaying ? audioElement : null}
      </div>

      <div>
        <UtilityButton buttonIcon={questionMark} />
      </div>
    </footer>
  );
}

export default Footer;
