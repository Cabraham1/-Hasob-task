import React, { Fragment } from "react";
import "./card.css";
import Coat from "../../assets/pngaaa.com-2952375.png";
import LoveCart from "../../assets/heart.png";

const Card = (props) => {
  return (
    <Fragment>
      <div>
        <div className="head-container">
          <div>
            <img src={Coat} alt="coat of arm" className="coat" />
          </div>
          <div>
            <p>FNG Savings Bond</p>
          </div>
        </div>
        <div className="title">
          <p className="card-title">730 days Savings Bond</p>
          <p className="card-date">Due Ocotober 12, 2024</p>
        </div>
        <div className="card-items">
          <span>Minimum</span>
          <p>N5,000</p>
        </div>
        <div className="card-items">
          <span>% per Year</span>
          <p>11.382%</p>
        </div>
        <div className="card-items">
          <span>Interest Payment</span>
          <p>Quarterly</p>
        </div>
        <div className="card-items">
          <span>Opening</span>
          <p>Oct/04/2022</p>
        </div>
        <div className="card-items">
          <span>Closing Date</span>
          <p>Oct/07/2022</p>
        </div>
        <div className="card-items">
          <span>Settlement</span>
          <p>Oct/12/2022</p>
        </div>
        <div className="card-action">
            <button>Add to cart</button>
          <a href="#">
            <img src={LoveCart} alt="love cart"  className="love-cart"/>
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
