import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ id, name, price, amount }) => {
  const { dispatch } = useCart();

  return (
    <div>
      <h4>{name}</h4>
      <p id={`cart-item-price-${id}`}>₹{price}</p>
      <div>
        <button id={`decrement-btn-${id}`} onClick={() => dispatch({ type: 'DECREMENT', payload: id })}>-</button>
        <span id={`cart-amount-${id}`}>{amount}</span>
        <button id={`increment-btn-${id}`} onClick={() => dispatch({ type: 'INCREMENT', payload: id })}>+</button>
      </div>
      <button onClick={() => dispatch({ type: 'REMOVE', payload: id })}>Remove</button>
    </div>
  );
};

export default CartItem;