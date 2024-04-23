import { useState } from "react";
import "../styles/pagesStyles/MainBody.css";
import CharacterCard from "../components/CharacterCard";

function MainBody() {
  const charactersList = [
    { name: "Bart", imageLocation: "/src/assets/Bart.webp" },
    { name: "Agnes Skinner", imageLocation: "/src/assets/Agnes_Skinner.webp" },
    { name: "Apu", imageLocation: "/src/assets/Apu.webp" },
    { name: "Willie", imageLocation: "/src/assets/Willie.webp" },
    /* { name: "Smithers", imageLocation: "/src/assets/Smithers.webp" },
    { name: "Skinner", imageLocation: "/src/assets/Seymour_Skinner.webp" },
    { name: "Ralph", imageLocation: "/src/assets/Ralph.webp" },
    { name: "Patty", imageLocation: "/src/assets/Patty.webp" },
    { name: "Ned", imageLocation: "/src/assets/Ned.webp" },
    { name: "Moe", imageLocation: "/src/assets/Moe.webp" },
    { name: "Milhouse", imageLocation: "/src/assets/Milhouse.webp" },
    { name: "Maude", imageLocation: "/src/assets/Maude.webp" },
    { name: "Marge", imageLocation: "/src/assets/Marge.webp" },
    { name: "Maggie", imageLocation: "/src/assets/Maggie.webp" },
    { name: "Lisa", imageLocation: "/src/assets/Lisa.webp" },
    { name: "Homer", imageLocation: "/src/assets/Homer.webp" },
    { name: "Grandpa", imageLocation: "/src/assets/GrandpaSimpson.webp" },
    { name: "Mrs. Hoover", imageLocation: "/src/assets/Elizabeth.webp" },
    { name: "Edna", imageLocation: "/src/assets/Edna.webp" },
    { name: "Chief Wiggum", imageLocation: "/src/assets/Chief_Wiggum.webp" },
    { name: "Mr. Burns", imageLocation: "/src/assets/Burns.webp" },
    { name: "Bob", imageLocation: "/src/assets/Bob.webp" },
    { name: "Barney", imageLocation: "/src/assets/Barney.webp" }, */
  ];

  return (
    <main className="MainBody">
      {charactersList.map((character) => (
        <CharacterCard
          key={character.name}
          characterImageLocation={character.imageLocation}
          characterName={character.name}
        />
      ))}
    </main>
  );
}

export default MainBody;
