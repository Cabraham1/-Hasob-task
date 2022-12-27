import React from "react";
import "./header.css";
import Cart from "../../../assets/trolley.png";
import Logo from "../../../assets/LOGO.png"

const Header = () => {
  return (
    <div className="header-container">
      <a href="#" className="logo">
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
          <button className="Signup">Sign Up</button>
        </ul>
        <div className="header-icon">
          <a href="#" className="cart">
            <img src={Cart} alt="CartIcon" className="cart-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
