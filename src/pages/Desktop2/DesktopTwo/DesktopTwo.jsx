import React from "react";
import Card from "../../../UI/cardUi/Card";
import Header from "../Header/header";
import CardHead from "../../../componets/card/Card";
import RightArrow from "../../../assets/next.png"
import "./DesktopTwo.css"

const DesktopTwo = () => {
  return (
    <div className="Desktop-Two">
      <Header />
      <div className="container-two">
        <Card>
          <CardHead />
        </Card>
        <Card>
          <CardHead />
        </Card>
        <Card>
          <CardHead />
        </Card>
        <a href="#">
          <img src={RightArrow} alt="next" />
        </a>
      </div>
    </div>
  );
};

export default DesktopTwo;
