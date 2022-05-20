import React, { Component } from "react";
import { createBEMclass } from "../../Util/BEM";
import "./Ingredients.style.scss";

export default class Ingredients extends Component {
  getRenderIngredients() {
    const { ingredients } = this.props;

    return (
      <>
        {ingredients.map((ingredient) => {
          const { id, price, name } = ingredient;
          return (
            <div
              key={id + name}
              className={createBEMclass("Ingredients", "Item")}
            >
              <input type="checkbox"></input>
              <span className={createBEMclass("Ingredients", "Name")}>
                {name}
              </span>
              <div className={createBEMclass("Ingredients", "Price")}>
                {" "}
                Price: {price}
              </div>
            </div>
          );
        })}
      </>
    );
  }

  render() {
    return (
      <div className={createBEMclass("Ingredients", "Wrapper")}>
        {this.getRenderIngredients()}
      </div>
    );
  }
}
