import React from "react";
import Header from "../Header/header";
import Card from "../../../UI/cardUi/Card";
import CardHead from "../../../componets/card/Card";
import "./desktopOne.css";
import RightArrow from "../../../assets/next.png";

const DesktopOne = (props) => {
  return (
    <div className="main-container">
      <Header />
      <div className="cardsItemes">
        <Card>
          <CardHead />
        </Card>
        <Card>
          <CardHead />
        </Card>
        <Card>
          <CardHead />
        </Card>
        <Card>
          <CardHead />
        </Card>
      </div>
      <a href="#">
        <img src={RightArrow} alt="next" />
      </a>
    </div>
  );
};

export default DesktopOne;
