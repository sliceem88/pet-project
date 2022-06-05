import React, { Component } from 'react'
import { createBEMclass } from '../../Util/BEM'
import { IMG_INGREDIENTS_LIST } from './Ingredients.config'
import './Ingredients.style.scss'

export default class Ingredients extends Component {
  getRenderIngredients() {
    const { ingredients, setIngredientToState, getIsSelected } = this.props

    return (
      <>
        { ingredients.map((ingredient) => {
          const { id, price, name, img } = ingredient
          const isSelected = getIsSelected(id);

          return (
            <div
              key={ id + name }
              className={ createBEMclass('Ingredients', 'Item', { isSelected }) }
              onClick={() => setIngredientToState(id, name)}
            >
              <span className={ createBEMclass('Ingredients', 'Name') }>
                  { name }
                </span>
              <div className={ createBEMclass('Ingredients', 'Price') }>
                { ' ' }
                Price: { price }
              </div>
              <div
                className={ createBEMclass('Ingredients', 'ImageWrapper') }>
                <img
                  className={ createBEMclass('Ingredients', 'Image') }
                  src={ IMG_INGREDIENTS_LIST[img] }
                  alt={ name }
                />
              </div>
            </div>
          )
        }) }
      </>
    )
  }

  render() {
    return (
      <div className={ createBEMclass('Ingredients', 'Wrapper') }>
        { this.getRenderIngredients() }
      </div>
    )
  }
}
