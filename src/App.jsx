import { useState } from "react";
import "./App.css";
import Header from "./pages/Header.jsx";
import Footer from "./pages/Footer.jsx";
import MainBody from "./pages/MainBody.jsx";
import MainMenu from "./pages/MainMenu.jsx";
import data from "/src/assets/charactersList.json";

function App() {
  const charactersLists = {
    impossibleMode: data.charactersListImpossibleMode,
    nightmareMode: data.charactersListNightmareMode,
    hardMode: data.charactersListHardMode,
    mediumMode: data.charactersListMediumMode,
    easyMode: data.charactersListEasyMode,
    easiestMode: data.charactersListEasiestMode,
  };

  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isMainMenuShowing, setIsMainMenuShowing] = useState(true);
  const [characters, setCharacters] = useState();
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <>
      <div className="App">
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
      <div className="backgroundImage"></div>
    </>
  );
}

export default App;
