import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showCard } from "../store/card-slice";
import "./Cart.css";

const Cart = () => {
  const quantity = useSelector((state) => state.card.totalQuantity);
  const dispatch = useDispatch();
  const setShowCart = () => {
    dispatch(showCard());
  };
  return (
    <div className="cartIcon">
      <h3 onClick={setShowCart}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
