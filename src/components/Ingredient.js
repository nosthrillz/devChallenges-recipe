import "./Ingredient.scss";

export default function Ingredient({ text, highlight, italic }) {
  const hStart = text.indexOf(highlight);
  const hEnd = text.indexOf(highlight) + highlight?.length;

  return (
    <div className="ingredient-wrapper">
      <div className="check"></div>
      {!!italic ? (
        <p className="italic">
          {highlight[0]} <em>{text}</em> {highlight[1]}
        </p>
      ) : (
        <>
          <p className="regular">
            {text.substring(0, hStart)}
            <strong>{highlight}</strong>
            {text.substring(hEnd)}
          </p>
        </>
      )}
    </div>
  );
}
