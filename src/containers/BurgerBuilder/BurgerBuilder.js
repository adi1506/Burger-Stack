import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
   meat: 1.5,
   salad: 0.4,
   bacon: 1.25,
   cheese: 1,
};

class BurgerBuilder extends Component {
   state = {
      ingredients: {
         meat: 0,
         bacon: 0,
         cheese: 0,
         salad: 0,
      },
      totalPrice: 4,
   };

   addIngredientHandler = (type) => {
      const oldCount = this.state.ingredients[type];
      const updatedCount = oldCount + 1;
      const updatedIngredients = { ...this.state.ingredients };
      updatedIngredients[type] = updatedCount;
      const priceAddition = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice + priceAddition;
      this.setState({
         ingredients: updatedIngredients,
         totalPrice: newPrice,
      });
   };

   removeIngredientHandler = (type) => {
      const oldCount = this.state.ingredients[type];
      if (oldCount > 0) {
         const updatedCount = oldCount - 1;
         const updatedIngredients = { ...this.state.ingredients };
         updatedIngredients[type] = updatedCount;
         const priceDeletion = INGREDIENT_PRICES[type];
         const oldPrice = this.state.totalPrice;
         const newPrice = oldPrice - priceDeletion;
         this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice,
         });
      }
   };
   render() {
      const disabledInfo = { ...this.state.ingredients };

      for (let key in disabledInfo) {
         disabledInfo[key] = disabledInfo[key] <= 0;
      }
      return (
         <>
            <Burger ingredients={this.state.ingredients} />
            <BuildControls
               ingredientAdded={this.addIngredientHandler}
               ingredientDeleted={this.removeIngredientHandler}
               disabled={disabledInfo}
               totalPrice = {this.state.totalPrice}
            />
         </>
      );
   }
}

export default BurgerBuilder;
