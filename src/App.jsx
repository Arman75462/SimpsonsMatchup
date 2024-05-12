import { useState } from "react";
import "./App.css";
import Header from "./pages/Header.jsx";
import Footer from "./pages/Footer.jsx";
import MainBody from "./pages/MainBody.jsx";

function App() {
  const [isAudioOn, setIsAudioOn] = useState(true);

  return (
    <>
      <div className="App">
        <Header isAudioOn={isAudioOn} />
        <MainBody />
        <Footer isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
      </div>
      <div className="backgroundImage"></div>
    </>
  );
}

export default App;
