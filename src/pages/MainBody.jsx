import { useState } from "react";
import "../styles/pagesStyles/MainBody.css";
import CharacterCard from "../components/CharacterCard";
import data from "/src/assets/charactersList.json";

const charactersListNightmareMode = data.charactersListNightmareMode;
const charactersListVeryHardMode = data.charactersListVeryHardMode;
const charactersListHardMode = data.charactersListHardMode;
const charactersListModerateHardMode = data.charactersListModerateHardMode;
const charactersListMediumMode = data.charactersListMediumMode;
const charactersListModeratelyEasyMode = data.charactersListModeratelyEasyMode;
const charactersListEasyMode = data.charactersListEasyMode;
const charactersListEasiestMode = data.charactersListEasiestMode;

function MainBody() {
  return (
    <main className="MainBody">
      <div className="MainBody__characters-container">
        {/* Slice the array to display only the first 5 characters */}
        {charactersListMediumMode.slice(0, 5).map((character) => (
          <CharacterCard
            key={character.name}
            characterImageLocation={character.imageLocation}
            characterName={character.name}
          />
        ))}
      </div>

      <p className="MainBody__click-counter">
        0/{charactersListMediumMode.length}
      </p>
    </main>
  );
}

export default MainBody;
