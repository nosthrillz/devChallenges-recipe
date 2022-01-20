import { SUMMARY } from "../texts";
import Eat from "../images/eat-icon.svg";
import Time from "../images/time-icon.svg";
import "./Summary.scss";

function SummaryPiece({ isFirst, text, amount }) {
  return (
    <div className={`summary-piece${isFirst ? " first" : ""}`}>
      <img src={!!isFirst ? Eat : Time} alt={text + " " + amount} />
      <div>
        <p className="text">{text}</p>
        <p className="amount">{amount}</p>
      </div>
    </div>
  );
}

export default function Summary() {
  return (
    <div className="summary-wrapper">
      {SUMMARY.map((item, idx) => (
        <SummaryPiece
          key={idx}
          isFirst={idx === 0}
          text={item.text}
          amount={item.amount}
        />
      ))}
    </div>
  );
}
