import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";

const Header = () => (
  <header>
    <NavLink className={classes.logo} to="/">ToDoList</NavLink>
    <form className={classes.search_form} action="/" method="post">
      {/* <input className={classes.search_form__search} type="search" name="search" placeholder="Пошук" /> */}
    </form>
  </header>
);

export default Header;
