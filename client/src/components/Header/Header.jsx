import React from "react";
import { NavLink, Redirect } from "react-router-dom";

import classes from "./Header.module.css";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      btn: "",
      redirect: false
    };
  }

  toogleVisibleMenu = () => {
    const menu = document.getElementById("menu_block");
    const logo = document.getElementById("logo");
    if (menu.style.right === "100vw") {
      menu.style.right = "0";
      logo.innerHTML = "Menu";
      this.setState({ btn: classes.burger_active });
    } else {
      menu.style.right = "100vw";
      logo.innerHTML = "ToDoList";
      this.setState({ btn: "" });
    }
  };

  render() {
    return (
      <header>
        <button
          className={classes.sandwich_btn}
          onClick={this.toogleVisibleMenu}
        >
          <div className={`${classes.line1} ${this.state.btn}`}></div>
          <div className={`${classes.line2} ${this.state.btn}`}></div>
          <div className={`${classes.line3} ${this.state.btn}`}></div>
        </button>

        <NavLink id="logo" className={classes.logo} to="/">
          ToDoList
        </NavLink>
        <form className={classes.search_form} action="/" method="post">
          {/* <input className={classes.search_form__search} type="search" name="search" placeholder="Пошук" /> */}
        </form>
      </header>
    );
  }
}

export default Header;
