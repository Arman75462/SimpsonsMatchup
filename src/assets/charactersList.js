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
  { name: "Bart", imageLocation: Bart, wasClicked: false },
  { name: "Agnes Skinner", imageLocation: AgnesSkinner, wasClicked: false },
  { name: "Apu", imageLocation: Apu, wasClicked: false },
  { name: "Willie", imageLocation: Willie, wasClicked: false },
  { name: "Smithers", imageLocation: Smithers, wasClicked: false },
];

const charactersListEasyMode = [
  ...charactersListEasiestMode,
  { name: "Seymour Skinner", imageLocation: SeymourSkinner, wasClicked: false },
  { name: "Ralph", imageLocation: Ralph, wasClicked: false },
];

const charactersListMediumMode = [
  ...charactersListEasyMode,
  { name: "Patty", imageLocation: Patty, wasClicked: false },
  { name: "Ned", imageLocation: Ned, wasClicked: false },
  { name: "Moe", imageLocation: Moe, wasClicked: false },
  { name: "Milhouse", imageLocation: Milhouse, wasClicked: false },
  { name: "Maude", imageLocation: Maude, wasClicked: false },
];

const charactersListHardMode = [
  ...charactersListMediumMode,
  { name: "Marge", imageLocation: Marge, wasClicked: false },
  { name: "Maggie", imageLocation: Maggie, wasClicked: false },
  { name: "Lisa", imageLocation: Lisa, wasClicked: false },
  { name: "Homer", imageLocation: Homer, wasClicked: false },
  { name: "Grandpa", imageLocation: GrandpaSimpson, wasClicked: false },
];

const charactersListNightmareMode = [
  ...charactersListHardMode,
  { name: "Mrs. Hoover", imageLocation: Elizabeth, wasClicked: false },
  { name: "Edna", imageLocation: Edna, wasClicked: false },
  { name: "Chief Wiggum", imageLocation: ChiefWiggum, wasClicked: false },
  { name: "Mr. Burns", imageLocation: Burns, wasClicked: false },
  { name: "Bob", imageLocation: Bob, wasClicked: false },
  { name: "Barney", imageLocation: Barney, wasClicked: false },
];

const charactersListImpossibleMode = [
  ...charactersListNightmareMode,
  { name: "Carl", imageLocation: Carl, wasClicked: false },
  { name: "Cat Lady", imageLocation: CatLady, wasClicked: false },
  { name: "Cletus", imageLocation: Cletus, wasClicked: false },
  { name: "Comic Book Guy", imageLocation: ComicBookGuy, wasClicked: false },
  { name: "Lenny", imageLocation: Lenny, wasClicked: false },
  { name: "Mayor", imageLocation: Mayor, wasClicked: false },
  { name: "Nelson", imageLocation: Nelson, wasClicked: false },
  { name: "Prof. Frink", imageLocation: ProfFrink, wasClicked: false },
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
