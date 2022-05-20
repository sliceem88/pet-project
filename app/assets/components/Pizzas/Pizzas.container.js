import React, { Component } from "react";
import { PIZZA_API_READ, API_HEADERS } from "../../Util/FetchingApi.config";
import { default as PizzasComponent } from "./Pizzas.component";

export default class PizzaContainer extends Component {
  state = {
    pizzas: [],
  };

  getAllPizzas() {
    fetch(PIZZA_API_READ, API_HEADERS)
      .then((pizzas) => pizzas.json())
      .then((pizzas) => {
        this.setState({ pizzas });
      });
  }

  componentDidMount() {
    this.getAllPizzas();
  }

  render() {
    return <PizzasComponent {...this.props} {...this.state} />;
  }
}
