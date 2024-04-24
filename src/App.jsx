import { useState } from "react";
import "./App.css";
import Header from "./pages/Header.jsx";
import Footer from "./pages/Footer.jsx";
import MainBody from "./pages/MainBody.jsx";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        {<MainBody />}
        <Footer />
      </div>
      <div className="backgroundImage"></div>
    </>
  );
}

export default App;
