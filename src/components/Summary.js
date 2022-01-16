import { SUMMARY } from "../texts";

export default function Summary() {
  return (
    <div className="summary-wrapper">
      {[0, 1, 2, 3].map((i, idx) => (
        <div key={idx}>
          <img src="" />
        </div>
      ))}
    </div>
  );
}
