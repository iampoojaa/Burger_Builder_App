import React from "react";

import Logo from "./../../Logo/Logo";
import NavigationItems from "./../NavigationItems/NavigationItems";

import Backdrop from "./../../UI/Backdrop/Backdrop";
import Auxiliary from "./../../../hoc/Auxiliary";

import Classes from "./SideDrawer.css";

const SideDrawer = (props) => {
  let attachClasses = [Classes.SideDrawer, Classes.Close];
  if (props.open) {
    attachClasses = [Classes.SideDrawer, Classes.Open];
  }
  return (
    <Auxiliary>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachClasses.join(" ")}>
        <div className={Classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxiliary>
  );
};

export default SideDrawer;
