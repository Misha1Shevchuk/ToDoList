import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";
import BurgerImg from "../svg/BurgerImg";

function toogleVisibleMenu() {
  let menu = document.getElementById("menu_block");
  let logo = document.getElementById("logo");
  if (menu.style.right === "100vw") {
    menu.style.right = "0";
    logo.innerHTML = "Menu";
  } else {
    menu.style.right = "100vw";
    logo.innerHTML = "ToDoList";
  }
}

const Header = () => {
  return (
    <header>
      <button className={classes.sandwich_btn} onClick={toogleVisibleMenu}>
        <BurgerImg className={classes.sandwich_img} />
      </button>

      <NavLink id="logo" className={classes.logo} to="/">
        ToDoList
      </NavLink>
      <form className={classes.search_form} action="/" method="post">
        {/* <input className={classes.search_form__search} type="search" name="search" placeholder="Пошук" /> */}
      </form>
    </header>
  );
};

export default Header;
