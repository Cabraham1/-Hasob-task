import React from 'react'
import Coat from "../../../assets/pngaaa.com-2952375.png"
import Cart from "../../../assets/trolley.png"
import "./Header.css"


const header = () => {
  return (
    <div className="header-container">
      <a href="#" className="header-logo">
        <img src={Coat} alt="coat of arm" className="coatofarm" />
        <p>
          DEBT MANAGEMENT OFFICE <br />
          NIGERIA
        </p>
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
          <button className='login'>Login</button>
          <button className='Signup'>Sign Up</button>
        </ul>
        <div className="header-icon">
          <a href="#" className="cart">
            <img src={Cart} alt="CartIcon" className="cart-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default header