import "./Instruction.scss";

export default function Instruction({ step, highlight, text }) {
  return (
    <div className="instruction-wrapper">
      <div className="step">{step}</div>
      <div className="text">
        {!!highlight && <strong>{highlight}</strong>} {text}
      </div>
    </div>
  );
}
