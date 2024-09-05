import React from "react";
import { currencyFormatter } from "../util/formatting";
import { Button } from "../UI/Button";
import { useContext } from "react";
import CartContext from "../store/CartContext";

export const MealItem = ({ meal }) => {
  const cartCtx = useContext(CartContext);

  function handleAddMealToCart() {
    cartCtx.addItem(meal);
  }

  return (
    <li className="meal-item">
      <article className="article">
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
          <p className="meal-item-actions">
            <Button onClick={handleAddMealToCart}>Add to Cart</Button>
          </p>
        </div>
      </article>
    </li>
  );
};