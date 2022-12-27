import React from "react";
import Header from "../Desktop1/Header/header";
import CartOne from "./CartOne";
import "./Cart.css";
import CartTwo from "./CartTwo";

const Cart = () => {
  return (
    <div>
      <Header />
      <CartOne />
      <CartOne />
      <CartTwo/>
    </div>
  );
};

export default Cart;
