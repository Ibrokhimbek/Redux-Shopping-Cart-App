import React from "react";
import { useDispatch } from "react-redux";
import { addToCard } from "../store/card-slice";

import "./Product.css";
const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={() => dispatch(addToCard({ id, name, price }))}>
        Add to cart
      </button>
    </div>
  );
};

export default Product;
