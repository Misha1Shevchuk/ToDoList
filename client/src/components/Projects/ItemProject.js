import React from "react";

const ItemProject = props => (
    // <li className="projects-list" id={"project-id-" + props.list[id].id_project}>
    //     <span className="menu-span" id={"id-project-" +  props.list[id].id_project}>  { props.list[id].project}  </span>
    //     <b id={"three-points-button-project-" +  props.list[id].id_project} className="three-points-button">···</b>
    //     <div className="buttons-block" id={"buttons-block-project-" + data[id].id_project}>
    //         <b id={"change-project-button-" +  props.list[id].id_project} className="item-change-button">🖉 Редагувати</b>
    //         <b id={"remove-project-button-" +  props.list[id].id_project} className="item-delete-button">X Видалити</b>
    //     </div>
    // </li>
    <li>{props.list}</li>
);

export default ItemProject;