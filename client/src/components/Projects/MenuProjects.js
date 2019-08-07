import React from "react";
import NewProjectForm from './NewProjectForm';
import ProjectsList from './ProjectsList';

const MenuProjects = () => ( 
    <div class="menu-item" id="item-project">
        <div class="menu-item-head" onclick="changeVisibility('form-add-divproject');">
            <h4>Проекти</h4><b class="menu-button-add" id="add-project"> + </b>
        </div>
        <div class="form-add-div" id="form-add-divproject">
            <ProjectsList/>
            <div class="menu-item-headbutton" onclick="changeVisibility('form-send-project');"><b>Новий проект</b></div>
            <NewProjectForm/>
        </div>
    </div>
);

export default MenuProjects;
