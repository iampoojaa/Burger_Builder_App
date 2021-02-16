import React from "react";

import Classes from "./Logo.css";

import burgerLogo from "./../../assets/Images/burger-logo.png";
const Logo = (props) => {
  return (
    <div className={Classes.Logo}>
      <img src={burgerLogo} alt="MyBurger" />
    </div>
  );
};

export default Logo;
