import { useState } from "react";
import "./App.css";
import Header from "./pages/Header.jsx";
import Footer from "./pages/Footer.jsx";
import MainBody from "./pages/MainBody.jsx";
import MainMenu from "./pages/MainMenu.jsx";

function App() {
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isMainMenuShowing, setIsMainMenuShowing] = useState(false);

  return (
    <>
      <div className="App">
        {isMainMenuShowing ? (
          <MainMenu isAudioOn={isAudioOn} />
        ) : (
          <>
            <Header
              isAudioOn={isAudioOn}
              isMainMenuShowing={isMainMenuShowing}
              setIsMainMenuShowing={setIsMainMenuShowing}
            />
            <MainBody />
          </>
        )}

        <Footer isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
      </div>
      <div className="backgroundImage"></div>
    </>
  );
}

export default App;
