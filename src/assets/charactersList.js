// Importing images
import Bart from "/src/assets/simpsons-images/Bart.webp";
import AgnesSkinner from "/src/assets/simpsons-images/Agnes_Skinner.webp";
import Apu from "/src/assets/simpsons-images/Apu.webp";
import Willie from "/src/assets/simpsons-images/Willie.webp";
import Smithers from "/src/assets/simpsons-images/Smithers.webp";
import SeymourSkinner from "/src/assets/simpsons-images/Seymour_Skinner.webp";
import Ralph from "/src/assets/simpsons-images/Ralph.webp";
import Patty from "/src/assets/simpsons-images/Patty.webp";
import Ned from "/src/assets/simpsons-images/Ned.webp";
import Moe from "/src/assets/simpsons-images/Moe.webp";
import Milhouse from "/src/assets/simpsons-images/Milhouse.webp";
import Maude from "/src/assets/simpsons-images/Maude.webp";
import Marge from "/src/assets/simpsons-images/Marge.webp";
import Maggie from "/src/assets/simpsons-images/Maggie.webp";
import Lisa from "/src/assets/simpsons-images/Lisa.webp";
import Homer from "/src/assets/simpsons-images/Homer.webp";
import GrandpaSimpson from "/src/assets/simpsons-images/GrandpaSimpson.webp";
import Elizabeth from "/src/assets/simpsons-images/Elizabeth.webp";
import Edna from "/src/assets/simpsons-images/Edna.webp";
import ChiefWiggum from "/src/assets/simpsons-images/Chief_Wiggum.webp";
import Burns from "/src/assets/simpsons-images/Burns.webp";
import Bob from "/src/assets/simpsons-images/Bob.webp";
import Barney from "/src/assets/simpsons-images/Barney.webp";
import Carl from "/src/assets/simpsons-images/Carl.webp";
import CatLady from "/src/assets/simpsons-images/catLady.webp";
import Cletus from "/src/assets/simpsons-images/Cletus.webp";
import ComicBookGuy from "/src/assets/simpsons-images/comicBookGuy.webp";
import Lenny from "/src/assets/simpsons-images/Lenny.webp";
import Mayor from "/src/assets/simpsons-images/Mayor.webp";
import Nelson from "/src/assets/simpsons-images/Nelson.webp";
import ProfFrink from "/src/assets/simpsons-images/profFrink.webp";

// Character lists
const charactersListEasiestMode = [
  { name: "Bart", imageLocation: Bart, wasClicked: false, id: 1 },
  {
    name: "Agnes Skinner",
    imageLocation: AgnesSkinner,
    wasClicked: false,
    id: 2,
  },
  { name: "Apu", imageLocation: Apu, wasClicked: false, id: 3 },
  { name: "Willie", imageLocation: Willie, wasClicked: false, id: 4 },
  { name: "Smithers", imageLocation: Smithers, wasClicked: false, id: 5 },
];

const charactersListEasyMode = [
  ...charactersListEasiestMode,
  {
    name: "Seymour Skinner",
    imageLocation: SeymourSkinner,
    wasClicked: false,
    id: 6,
  },
  { name: "Ralph", imageLocation: Ralph, wasClicked: false, id: 7 },
];

const charactersListMediumMode = [
  ...charactersListEasyMode,
  { name: "Patty", imageLocation: Patty, wasClicked: false, id: 8 },
  { name: "Ned", imageLocation: Ned, wasClicked: false, id: 9 },
  { name: "Moe", imageLocation: Moe, wasClicked: false, id: 10 },
  { name: "Milhouse", imageLocation: Milhouse, wasClicked: false, id: 11 },
  { name: "Maude", imageLocation: Maude, wasClicked: false, id: 12 },
];

const charactersListHardMode = [
  ...charactersListMediumMode,
  { name: "Marge", imageLocation: Marge, wasClicked: false, id: 13 },
  { name: "Maggie", imageLocation: Maggie, wasClicked: false, id: 14 },
  { name: "Lisa", imageLocation: Lisa, wasClicked: false, id: 15 },
  { name: "Homer", imageLocation: Homer, wasClicked: false, id: 16 },
  { name: "Grandpa", imageLocation: GrandpaSimpson, wasClicked: false, id: 17 },
];

const charactersListNightmareMode = [
  ...charactersListHardMode,
  { name: "Mrs. Hoover", imageLocation: Elizabeth, wasClicked: false, id: 18 },
  { name: "Edna", imageLocation: Edna, wasClicked: false, id: 19 },
  {
    name: "Chief Wiggum",
    imageLocation: ChiefWiggum,
    wasClicked: false,
    id: 20,
  },
  { name: "Mr. Burns", imageLocation: Burns, wasClicked: false, id: 21 },
  { name: "Bob", imageLocation: Bob, wasClicked: false, id: 22 },
  { name: "Barney", imageLocation: Barney, wasClicked: false, id: 23 },
];

const charactersListImpossibleMode = [
  ...charactersListNightmareMode,
  { name: "Carl", imageLocation: Carl, wasClicked: false, id: 24 },
  { name: "Cat Lady", imageLocation: CatLady, wasClicked: false, id: 25 },
  { name: "Cletus", imageLocation: Cletus, wasClicked: false, id: 26 },
  {
    name: "Comic Book Guy",
    imageLocation: ComicBookGuy,
    wasClicked: false,
    id: 27,
  },
  { name: "Lenny", imageLocation: Lenny, wasClicked: false, id: 28 },
  { name: "Mayor", imageLocation: Mayor, wasClicked: false, id: 29 },
  { name: "Nelson", imageLocation: Nelson, wasClicked: false, id: 30 },
  { name: "Prof. Frink", imageLocation: ProfFrink, wasClicked: false, id: 31 },
];

// Exporting lists
export default {
  charactersListEasiestMode,
  charactersListEasyMode,
  charactersListMediumMode,
  charactersListHardMode,
  charactersListNightmareMode,
  charactersListImpossibleMode,
};
