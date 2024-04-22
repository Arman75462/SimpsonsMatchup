import { useState } from "react";
import "../styles/pagesStyles/MainBody.css";
import CharacterCard from "../components/CharacterCard";
import AgnesSkinner from "../assets/Agnes_Skinner.webp";
import Apu from "../assets/Apu.webp";
import Barney from "../assets/Barney.webp";
import Bart from "../assets/Bart.webp";
import Bob from "../assets/Bob.webp";
import Burns from "../assets/Burns.webp";
import ChiefWiggum from "../assets/Chief_Wiggum.webp";
import Edna from "../assets/Edna.webp";
import Hoover from "../assets/Elizabeth.webp";
import Grandpa from "../assets/GrandpaSimpson.webp";
import Homer from "../assets/Homer.webp";
import Lisa from "../assets/Lisa.webp";
import Maggie from "../assets/Maggie.webp";
import Marge from "../assets/Marge.webp";
import Maude from "../assets/Maude.webp";
import Milhouse from "../assets/Milhouse.webp";
import Moe from "../assets/Moe.webp";
import Ned from "../assets/Ned.webp";
import Patty from "../assets/Patty.webp";
import Ralph from "../assets/Ralph.webp";
import Seymour from "../assets/Seymour_Skinner.webp";
import Smithers from "../assets/Smithers.webp";
import Willie from "../assets/Willie.webp";

function MainBody() {
  return (
    <main className="MainBody">
      <CharacterCard characterImage={AgnesSkinner} characterName="Agnes" />
      <CharacterCard characterImage={Apu} characterName="Apu" />
      <CharacterCard characterImage={Barney} characterName="Barney" />
      <CharacterCard characterImage={Bart} characterName="Bart" />
      <CharacterCard characterImage={Bob} characterName="Bob" />
      <CharacterCard characterImage={Burns} characterName="Mr. Burns" />
      <CharacterCard
        characterImage={ChiefWiggum}
        characterName="Chief Wiggum"
      />
      <CharacterCard characterImage={Edna} characterName="Edna" />
      <CharacterCard characterImage={Hoover} characterName="Mrs. Hoover" />
      <CharacterCard characterImage={Grandpa} characterName="Grandpa" />
      <CharacterCard characterImage={Homer} characterName="Homer" />
      <CharacterCard characterImage={Lisa} characterName="Lisa" />
      <CharacterCard characterImage={Maggie} characterName="Maggie" />
      <CharacterCard characterImage={Marge} characterName="Marge" />
      <CharacterCard characterImage={Maude} characterName="Maude" />
      <CharacterCard characterImage={Milhouse} characterName="Milhouse" />
      <CharacterCard characterImage={Moe} characterName="Moe" />
      <CharacterCard characterImage={Ned} characterName="Ned" />
      <CharacterCard characterImage={Patty} characterName="Patty" />
      <CharacterCard characterImage={Ralph} characterName="Ralph" />
      <CharacterCard characterImage={Seymour} characterName="Seymour" />
      <CharacterCard characterImage={Smithers} characterName="Smithers" />
      <CharacterCard characterImage={Willie} characterName="Willie" />
    </main>
  );
}

export default MainBody;
