import React from "react";
import "./header.css";
import Coat from "../../../assets/pngaaa.com-2952375.png";
import Profile from "../../../assets/user-svgrepo-com.svg";
import Cart from "../../../assets/cart-svgrepo-com.svg";

const header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img src={Coat} alt="coat of arm" className="coatofarm" />
        <p>
          DEBT MANAGEMENT OFFICE <br />
          NIGERIA
        </p>
      </div>
      <div className="header-nav">
        <ul className="header-Items">
          <li>
            <a href="#">Bond Offer</a>
          </li>

          <li>
            <a href="#">Portfolio</a>
          </li>

          <li>
            <a href="#">Notification</a>
          </li>
        </ul>
        <div className="header-icon">
          <a href="">
            <img src={Profile} alt="CartIcon" className="profile-icon" />
          </a>
          <a href="#" className='cart'>
            <img src={Cart} alt="CartIcon" className="cart-icon" />
            <div className="counter">2</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default header;
