import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
const Layout = () => {
  const { totalPrice, showCart } = useSelector((state) => state.card);

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        {showCart && <CartItems />}
        <Products />
        <div className="total-price">
          <h3>Total: ${totalPrice}</h3>
          <button className="orderBtn">Place Order</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
