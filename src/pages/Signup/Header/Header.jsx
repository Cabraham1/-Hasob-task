import React from "react";
import Cart from "../../../assets/trolley.png";
import Logo from "../../../assets/LOGO.png"
import "./header.css"

const header = () => {
  return (
    <div className="header-container">
      <a href="#" className="header-logo">
        <img src={Logo} alt="coat of arm" className="coatLogo" />
      </a>

      <div className="header-nav">
        <ul className="header-Items">
          <li>
            <a href="#">Bond Offer</a>
          </li>

          <li>
            <a href="#">DMO</a>
          </li>

          <li>
            <a href="#">Features</a>
          </li>
          <button className="login">Login</button>
        </ul>
        <div className="header-icon">
          <a href="#" className="cart">
            <img src={Cart} alt="CartIcon" className="cart-icon" />
            <div className="counter">2</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default header;
