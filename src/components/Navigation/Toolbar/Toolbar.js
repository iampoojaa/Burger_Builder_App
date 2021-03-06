import React from "react";
import Classes from "./Toolbar.css";
import Logo from "./../../Logo/Logo";
import NavigationItems from "./../NavigationItems/NavigationItems";
import DrawerToggle from "./../../Navigation/SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = (props) => {
  return (
    <header className={Classes.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <div className={Classes.Logo}>
        <Logo />
      </div>
      <nav className={Classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
