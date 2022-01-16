import "./InstructionList.scss";
import Instruction from "./Instruction";
import { INSTRUCTIONS } from "../texts";

export default function InstructionList() {
  return (
    <div className="instructions-wrapper">
      <h2>Instructions</h2>
      <div>
        {INSTRUCTIONS.map((item, idx) => (
          <Instruction
            key={idx}
            step={idx + 1}
            highlight={item.highlight}
            text={item.text}
          />
        ))}
      </div>
      <p className="source">
        Source: https://sallysbakingaddiction.com/classic-cheesecake/
      </p>
    </div>
  );
}
