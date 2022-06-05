import React, { Component } from 'react'
import {
  API_HEADERS,
  INGREGIENTS_API_READ,
} from '../../Util/FetchingApi.config'
import { default as IngredientsComponent } from './Ingredients.component'

export default class IngredientsContainer extends Component {
  state = {
    ingredients: [],
    setIngredients: new Map()
  }

  componentDidMount() {
    this.getAllIngredients()
  }

  containerFunctions = {
    setIngredientToState: this.setIngredientToState.bind(this),
    getIsSelected: this.getIsSelected.bind(this)
  }

  setIngredientToState(id, name) {
    const { setIngredients } = this.state;
    const ingredientSelected = setIngredients.has(id);

    if(ingredientSelected) {
      setIngredients.delete(id);
      this.setState({setIngredients})
      return;
    }

    setIngredients.set(id, {'id': id, 'name': name})
    this.setState({setIngredients})
  }

  getIsSelected(id) {
    const { setIngredients } = this.state;

    return setIngredients.has(id);
  }

  getAllIngredients() {
    fetch(INGREGIENTS_API_READ, API_HEADERS).
      then((ingredients) => ingredients.json()).
      then((ingredients) => this.setState({ ingredients } ))
  }

  render() {
    return <IngredientsComponent { ...this.props } { ...this.state } { ...this.containerFunctions } />
  }
}
