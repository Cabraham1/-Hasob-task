import React from "react";
import "./home.css";
import Header from "./header/Header";
import smallArrow from "../../assets/icons8-right-arrow-50.png";
import PlayVid from "../../assets/play-button.png";
import Statpic from "../../assets/Home1.png"
import Blod from "../../assets/blob_11-6-NaN.svg"
import mainPic from "../../assets/Component 3.png"

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="divider">
        <div className="left"></div>
        <div className="right"></div>
      </div>
      <div className="home-Title">
        <h1>
          Subscribe to FGN <br />
          Saving Bond
        </h1>
        <p>Loan and get paid with interest</p>
      </div>
      <div className="home-action">
        <button>
          Get Started
          <img src={smallArrow} alt="start" className="rightArrow" />
        </button>
        <div className="play-vid">
          <a href="#">
            <img src={PlayVid} alt="" />
          </a>
          <span>See video</span>
        </div>
      </div>
      {/* <div className="next">
        <a href="#">
          <img src={nextPage} alt="" />
        </a>
      </div>
      <div className="menuNav">
        <a href="#">
          <img src={menuPage} alt="" className="menupage" />
        </a>
      </div> */}
      <img src={Blod} alt="" className="blob" />
      <img src={mainPic} alt="" className="mainPic" />
      <img src={Statpic} alt="" className="statPic" />
    </div>
  );
};

export default Home;
