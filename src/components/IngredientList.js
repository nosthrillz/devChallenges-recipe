import "./IngredientList.scss";
import { INGREDIENTS } from "../texts";
import Ingredient from "./Ingredient";

export default function IngredientList() {
  return (
    <div className="ingredient-list-wrapper">
      <h2>Ingredients</h2>
      {INGREDIENTS.map((ingredientList, idx) => (
        <div key={idx}>
          <h3>{ingredientList.name}</h3>
          {ingredientList.ingredients.map((ingredient, idx) => (
            <Ingredient
              key={idx}
              italic={ingredient.italic}
              highlight={ingredient.highlight}
              text={ingredient.text}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
