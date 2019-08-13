import React from "react";

const ItemProject = props => (
    <li className="projects-list" id={"project-id-" + props.element.id_project}>
        <span className="menu-span" id={"id-project-" +  props.element.id_project}>  { props.element.project}  </span>
        <b id={"three-points-button-project-" +  props.element.id_project} className="three-points-button">···</b>
        <div className="buttons-block" id={"buttons-block-project-" +props.element.id_project}>
            <b id={"change-project-button-" +  props.element.id_project} className="item-change-button">✎ Редагувати</b>
            <b id={"remove-project-button-" +  props.element.id_project} className="item-delete-button">X Видалити</b>
        </div>
    </li>
);



export default ItemProject;