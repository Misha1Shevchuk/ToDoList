import React from "react";

const Header = () => (
    <header>
        <h1>ToDoList</h1>
        <form id="search-form" action="/" method="post">
            <input id="search" type="search" name="search" placeholder="Пошук" />
        </form>
    </header>
    
);

export default Header;