import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
   { label: 'Meat', type: 'meat' },
   { label: 'Salad', type: 'salad' },
   { label: 'Cheese', type: 'cheese' },
   { label: 'Bacon', type: 'bacon' },
];

const BuildControls = (props) => (
   <div className={classes.BuildControls}>
       <p>Total Price : <strong>${props.totalPrice.toFixed(2)}</strong></p>
      {controls.map((ctrl) => (
         <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientDeleted(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
         />
      ))}
      <button disabled={!props.purchasable} className={classes.OrderButton}>ORDER NOW</button>
   </div>
);

export default BuildControls;
