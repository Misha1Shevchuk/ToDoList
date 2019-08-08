import React from "react";

const ItemLabel = props => (
    <li  className="labels-list" id={"label-id-" + props.list[id].id_label}>
        <span id={"id-label" + props.list[id].id_label} className="menu-span">{props.list[id].label}</span>
        <b id={"three-points-button-label-" + props.list[id].id_label} className="three-points-button">···</b>
        <div className="buttons-block" id={"buttons-block-label-" + props.list[id].id_label}>
            <b id={"change-label-button-" + props.list[id].id_label} className="item-change-button">🖉 Редагувати</b>
            <b id={"remove-label-button-" + props.list[id].id_label} className="item-delete-button">X Видалити</b>
        </div>
    </li>
);

export default ItemLabel;