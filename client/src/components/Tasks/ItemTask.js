import React from "react";

const ItemTask = props => (
    <li className="tasks-class" id={"task-id-" + props.list[id].id_task}>
        <input type="checkbox" checked id={"checkbox-number-" + props.list[id].id_task} className="check" />
        <span className="task"> {props.list[id].task} </span>
        <b id={"three-points-button-task-" + props.list[id].id_task} className="three-points-button">···</b>
        <div className="buttons-block" id={"buttons-block-task-" + props.list[id].id_task}>
            <b id={"change-task-button-" + props.list[id].id_task} className="item-change-button">🖉 Редагувати</b>
            <b id={"remove-task-button-" + props.list[id].id_task} className="item-delete-button">X Видалити</b>
        </div>
    </li>
);

export default ItemTask;