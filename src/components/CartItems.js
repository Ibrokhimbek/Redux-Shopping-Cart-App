import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const listItems = useSelector((state) => state.card.itemsList);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {listItems.map((item) => (
          <li key={item.id}>
            <CartItem
              id={item.id}
              price={item.price}
              name={item.name}
              quantity={item.quantity}
              total={item.totalPrice}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
