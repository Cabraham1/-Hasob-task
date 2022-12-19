import React, { useState } from "react";
import "./Cart.css";
import Coat from "../../assets/pngaaa.com-2952375.png";
import Add from "../../assets/add.png";
import Minus from "../../assets/minus.png";
import CheckBox from "../../componets/checkBox/Checkbox"

const CartOne = (props) => {
  const [amount, setAmount] = useState("300,000.00");

  return (
    <div className="cartOne">
      <div className="cartOne-container">
        <div id="inputPreview">
          <CheckBox />
          <label for="demo_opt_1">
            <img src={Coat} alt="" id="coat" />
          </label>
          <p className="cart-title">730 days Savings Bond</p>
        </div>
        <div >
          <button className="automatic">Automatic</button>
          <button className="delete">Delete</button>
        </div>
        <div className="input-form">
          <label>
            Value(<span className="naira">&#8358;</span>)
          </label>
          <div className="amount">
            <input
              type="text"
              id="amount"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <a href="#" className="minus">
              <img src={Minus} alt="minus" />
            </a>
            <span>01</span>
            <a href="#" className="add">
              <img src={Add} alt="Add" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartOne;
