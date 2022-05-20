import React, { Component } from "react";
import {
  API_HEADERS,
  INGREGIENTS_API_READ,
} from "../../Util/FetchingApi.config";
import { default as IngredientsComponent } from "./Ingredients.component";

export default class IngredientsContainer extends Component {
  state = {
    ingredients: [],
  };

  componentDidMount() {
    this.getAllIngredients();
  }

  getAllIngredients() {
    fetch(INGREGIENTS_API_READ, API_HEADERS)
      .then((ingredients) => ingredients.json())
      .then((ingredients) => this.setState({ ingredients }));
  }

  render() {
    return <IngredientsComponent {...this.props} {...this.state} />;
  }
}
