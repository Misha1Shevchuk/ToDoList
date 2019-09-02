import React from "react";
import MenuProjects from "./Projects/MenuProjects";
import classes from "./Menu.module.css";

const Menu = () => (
  <div className={classes.menu} id="menu_block">
    <MenuProjects />
  </div>
);

export default Menu;
