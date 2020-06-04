import React from 'react';

const OrderSummary = (props) =>
{
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform : 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
            </li>
        );
    })
    
    return(
        <>
            <h3>Your Order</h3>
            <p>Your Burger has the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Proceed to Checkout?</p>

        </>
    );
}

export default OrderSummary;