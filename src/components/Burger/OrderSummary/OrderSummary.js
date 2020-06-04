import React from 'react';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
   const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
      return (
         <li key={igKey}>
            <span style={{ textTransform: 'capitalize' }}>{igKey}</span> : {props.ingredients[igKey]}
         </li>
      );
   });

   return (
      <>
         <h3>Your Order</h3>
         <p>Your Burger has the following ingredients:</p>
         <ul>{ingredientSummary}</ul>
         <p>
            Total Price : <strong>${props.totalPrice.toFixed(2)}</strong>
         </p>
         <p>Proceed to Checkout?</p>
         <Button btnType='Danger' clicked={props.purchaseCancel}>
            CANCEL
         </Button>
         <Button btnType='Success' clicked={props.purchaseContinue}>
            CONTINUE
         </Button>
      </>
   );
};

export default OrderSummary;
