import React from "react";
import DownArrow from "../../assets/down-arrow.png";

const CartTwo = () => {
  return (
    <div className="cartOne">
      <div className="cartTwo-container">
        <div className="cartTwo-container3">
          <div className="fees-section">
            <p>Fees</p>
            <span>+</span>
            <p>Taxes</p>
            <a href="#">
              <img src={DownArrow} alt="down arrow" className="downArrow" />
            </a>
          </div>
          <div className="fees-section2">
            <span>N 2.09</span>
          </div>
          <div className="fees-section3">
            <p>Total Buy</p>
          </div>
        </div>
        <div className="feesAmount">
          <span className="naira1">&#8358;</span>
          <span className="nairaAmount"> 6000,000.00</span>
        </div>
        <p>This is a 730 days Saving Bond, you have a<br/> fixed income</p>
      </div>
    </div>
  );
};

export default CartTwo;
