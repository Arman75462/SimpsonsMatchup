import { useState } from "react";
import "./App.css";
import Header from "./pages/Header.jsx";
import Footer from "./pages/Footer.jsx";
import MainBody from "./pages/MainBody.jsx";
import MainMenu from "./pages/MainMenu.jsx";
import data from "/public/assets/charactersList.json";

function App() {
  // Object containing lists of characters categorized by difficulty levels. Fetched from charactersList.json
  const charactersLists = {
    impossibleMode: data.charactersListImpossibleMode,
    nightmareMode: data.charactersListNightmareMode,
    hardMode: data.charactersListHardMode,
    mediumMode: data.charactersListMediumMode,
    easyMode: data.charactersListEasyMode,
    easiestMode: data.charactersListEasiestMode,
  };

  // State to manage the audio settings, specifically for non-music sounds.
  const [isAudioOn, setIsAudioOn] = useState(true);

  // State to control the visibility of the main menu.
  const [isMainMenuShowing, setIsMainMenuShowing] = useState(true);

  // State to determine which characters to display based on the selected difficulty level.
  const [characters, setCharacters] = useState();

  // State to track the current score displayed in the scoreBoard component.
  const [currentScore, setCurrentScore] = useState(0);

  // State to track the best score displayed in the scoreBoard component.
  const [bestScore, setBestScore] = useState(0);

  return (
    <>
      <div className="App">
        {/* Conditional rendering: Display the MainMenu component if the main menu is visible (which is visible when cliking the simpsons logo located specifically in Header component), otherwise display the Header and MainBody components (the main game interface). */}
        {isMainMenuShowing ? (
          <MainMenu
            isAudioOn={isAudioOn}
            setIsMainMenuShowing={setIsMainMenuShowing}
            setCharacters={setCharacters}
            charactersLists={charactersLists}
          />
        ) : (
          <>
            <Header
              isAudioOn={isAudioOn}
              isMainMenuShowing={isMainMenuShowing}
              setIsMainMenuShowing={setIsMainMenuShowing}
              currentScore={currentScore}
              bestScore={bestScore}
              setCurrentScore={setCurrentScore}
            />
            <MainBody
              characters={characters}
              setIsMainMenuShowing={setIsMainMenuShowing}
              currentScore={currentScore}
              setCurrentScore={setCurrentScore}
              bestScore={bestScore}
              setBestScore={setBestScore}
              isAudioOn={isAudioOn}
            />
          </>
        )}

        <Footer isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
      </div>

      {/* Blurred image of the Simpsons family set as the website's background image */}
      <div className="backgroundImage"></div>
    </>
  );
}

export default App;
