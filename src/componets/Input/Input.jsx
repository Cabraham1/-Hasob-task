import React from "react";
import "./input.css";
import Checkbox from "../checkBox/Checkbox";
import CoatRight from "../../assets/image 2.png";
import CoatLeft from "../../assets/image 1.png";

const Input = () => {
  return (
    <div className="input-container">
      <div className="inputTitle">
        <h1>Signup</h1>
        <p>Stop Spending, Start Investing</p>
      </div>
      <div className="form-container">
        <form action="">
          <div className="input-field">
            <label for="name" className="firstInput">
              First Name
            </label>
            <input type="text" placeholder="Enter your First Name" required />
          </div>
          <div className="input-field">
            <label for="name">First Name</label>
            <input type="text" placeholder="Enter your First Name" />
          </div>
          <div className="input-field">
            <label for="name">First Name</label>
            <input type="text" placeholder="Enter your First Name" />
          </div>
          <div className="input-field">
            <label for="name">First Name</label>
            <input type="text" placeholder="Enter your First Name" />
          </div>
          <div className="input-field">
            <label for="name">First Name</label>
            <input type="text" placeholder="Enter your First Name" />
          </div>
          <div className="form-term">
            <Checkbox />
            <span>
              By continuing you agree to the <u>Terms and condition</u>
            </span>
          </div>
          <button className="input-button">Sign Up</button>
        </form>
      </div>
      <div className="background-img">
        <img src={CoatLeft} alt="" className="coat-two" />
        <img src={CoatRight} alt="" className="coat-one" />
      </div>
    </div>
  );
};

export default Input;
