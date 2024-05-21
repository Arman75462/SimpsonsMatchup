import { useState } from "react";
import "./App.css";
import Header from "./pages/Header.jsx";
import Footer from "./pages/Footer.jsx";
import MainBody from "./pages/MainBody.jsx";
import MainMenu from "./pages/MainMenu.jsx";
import data from "/src/assets/charactersList.json";

function App() {
  const charactersLists = {
    nightmareMode: data.charactersListNightmareMode,
    hardMode: data.charactersListHardMode,
    mediumMode: data.charactersListMediumMode,
    easyMode: data.charactersListEasyMode,
    easiestMode: data.charactersListEasiestMode,
  };

  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isMainMenuShowing, setIsMainMenuShowing] = useState(true);
  const [characters, setCharacters] = useState();

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
            />
            <MainBody
              characters={characters}
              setIsMainMenuShowing={setIsMainMenuShowing}
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
