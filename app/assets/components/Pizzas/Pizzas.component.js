import React, { Component } from "react";
import { createBEMclass } from "../../Util/BEM";
import "./Pizzas.style.scss";

export default class Pizzas extends Component {
  renderPizzas() {
    const { pizzas } = this.props;

    return (
      <>
        {pizzas.map((pizza) => {
          const { name, ingredients, price } = pizza;

          return (
            <div className={createBEMclass("Pizza", "Item")} key={name}>
              <input type="checkbox"></input>
              <div className={createBEMclass("Pizza", "Name")}>
                Name: {name}
              </div>
              <div className={createBEMclass("Pizza", "Price")}>
                Price: {price}
              </div>
              <div className={createBEMclass("Pizza", "Ingredients")}>
                Pizza ingredients: {this.getRenderIngredients(ingredients)}
              </div>
            </div>
          );
        })}
      </>
    );
  }

  getRenderIngredients(ingredients) {
    const data = Object.keys(ingredients);

    return (
      <ul className={createBEMclass("Pizza", "IngredientsList")}>
        {data.map((ingredient) => (
          <li
            className={createBEMclass("Pizza", "Ingredient")}
            key={ingredient}
          >
            {ingredient}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <>
        <p className={createBEMclass("Pizza", "Title")}>
          Here we have our Pizza menu:
        </p>
        <div className={createBEMclass("Pizza", "Menu")}>
          {this.renderPizzas()}
        </div>
      </>
    );
  }
}
