import { useState } from "react";
import "../styles/pagesStyles/MainBody.css";
import CharacterCard from "../components/CharacterCard";

function MainBody() {
  const charactersList = [
    { name: "Bart", imageLocation: "/src/assets/simpsons-images/Bart.webp" },
    {
      name: "Agnes Skinner",
      imageLocation: "/src/assets/simpsons-images/Agnes_Skinner.webp",
    },
    { name: "Apu", imageLocation: "/src/assets/simpsons-images/Apu.webp" },
    {
      name: "Willie",
      imageLocation: "/src/assets/simpsons-images/Willie.webp",
    },
    /* {
      name: "Smithers",
      imageLocation: "/src/assets/simpsons-images/Smithers.webp",
    },
    {
      name: "Skinner",
      imageLocation: "/src/assets/simpsons-images/Seymour_Skinner.webp",
    },
    { name: "Ralph", imageLocation: "/src/assets/simpsons-images/Ralph.webp" },
    { name: "Patty", imageLocation: "/src/assets/simpsons-images/Patty.webp" },
    { name: "Ned", imageLocation: "/src/assets/simpsons-images/Ned.webp" },
    { name: "Moe", imageLocation: "/src/assets/simpsons-images/Moe.webp" },
    {
      name: "Milhouse",
      imageLocation: "/src/assets/simpsons-images/Milhouse.webp",
    },
    { name: "Maude", imageLocation: "/src/assets/simpsons-images/Maude.webp" },
    { name: "Marge", imageLocation: "/src/assets/simpsons-images/Marge.webp" },
    {
      name: "Maggie",
      imageLocation: "/src/assets/simpsons-images/Maggie.webp",
    },
    { name: "Lisa", imageLocation: "/src/assets/simpsons-images/Lisa.webp" },
    { name: "Homer", imageLocation: "/src/assets/simpsons-images/Homer.webp" },
    {
      name: "Grandpa",
      imageLocation: "/src/assets/simpsons-images/GrandpaSimpson.webp",
    },
    {
      name: "Mrs. Hoover",
      imageLocation: "/src/assets/simpsons-images/Elizabeth.webp",
    },
    { name: "Edna", imageLocation: "/src/assets/simpsons-images/Edna.webp" },
    {
      name: "Chief Wiggum",
      imageLocation: "/src/assets/simpsons-images/Chief_Wiggum.webp",
    },
    {
      name: "Mr. Burns",
      imageLocation: "/src/assets/simpsons-images/Burns.webp",
    },
    { name: "Bob", imageLocation: "/src/assets/simpsons-images/Bob.webp" },
    {
      name: "Barney",
      imageLocation: "/src/assets/simpsons-images/Barney.webp",
    }, */
  ];

  return (
    <main className="MainBody">
      <div className="MainBody__characters-container">
        {charactersList.map((character) => (
          <CharacterCard
            key={character.name}
            characterImageLocation={character.imageLocation}
            characterName={character.name}
          />
        ))}
      </div>

      <p className="MainBody__click-counter">0/5</p>
    </main>
  );
}

export default MainBody;
