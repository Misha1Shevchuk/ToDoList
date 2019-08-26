import React from "react";
import classes from "./Header.module.css";

const Header = () => (
    <header>
        <h1>ToDoList</h1>
        <form className={classes.search_form} action="/" method="post">
            <input className={classes.search_form__search} type="search" name="search" placeholder="Пошук" />
        </form>
    </header>
    
);

export default Header;