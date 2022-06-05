import React, { Component } from "react";
import UserInfo from "../UserInfo";
import Pizzas from "../Pizzas";
import Ingredients from "../Ingredients";
import { createBEMclass } from "../../Util/BEM";
import "./Home.style.scss";

export default class Home extends Component {
  render() {
    return (
      <>
        <UserInfo />
        <Pizzas />
        <div className={createBEMclass("Home", "CreateYourOwn")}>
          OR create you own PIZZA, here is Ingredients:
        </div>
        <Ingredients />
      </>
    );
  }
}
