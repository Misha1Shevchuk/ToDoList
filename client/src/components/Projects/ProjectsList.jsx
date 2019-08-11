import React from "react";
import ItemProject from "./ItemProject";


const ProjectsList = props => (
    <ul className="menu-list" id="ul-projects-list">
        <ItemProject list={props.list} />
    </ul>

);

export default ProjectsList;