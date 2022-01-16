import "./App.scss";
import IngredientList from "./components/IngredientList";
import InstructionList from "./components/InstructionList";

function App() {
  return (
    <div className="app-wrapper">
      <IngredientList />
      <InstructionList />
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
