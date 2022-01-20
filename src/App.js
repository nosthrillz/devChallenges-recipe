import "./App.scss";
import IngredientList from "./components/IngredientList";
import InstructionList from "./components/InstructionList";
import Summary from "./components/Summary";
import { INTRO } from "./texts";
import DotsIcon from "./images/dots-icon.svg";
import Cheesecake from "./images/cheescake.png";

function App() {
  return (
    <div className="app-wrapper">
      <div className="recipe-intro">
        <h1>{INTRO.title}</h1>
        <div>
          <img src={DotsIcon} alt="6 dots" />
          <p>{INTRO.description}</p>
        </div>
        <img src={Cheesecake} alt="finished recipe" />
      </div>
      <div className="recipe-details">
        <Summary />
        <div className="steps">
          <IngredientList />
          <InstructionList />
        </div>
      </div>
      <footer>
        created by{" "}
        <a
          href="https://github.com/nosthrillz"
          target="_blank"
          rel="noreferrer"
        >
          NoSThrillZ
        </a>{" "}
        - devChallenges.io
      </footer>
    </div>
  );
}

export default App;
