import React from "react";
import MenuLabels from './Labels/MenuLabels';
import MenuProjects from './Projects/MenuProjects';

const Menu = () => (
<div className="menu">
    <MenuProjects/>
    <MenuLabels/>
</div>
);

export default Menu;