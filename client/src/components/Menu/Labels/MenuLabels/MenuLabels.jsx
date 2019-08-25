import React from "react";
import NewLabelForm from '../NewLabelForm/NewLabelForm';
import LabelsList from "../LabelsList/LabelsList";

const MenuLabels = () => (      
    <div className="menu-item" id="item-label">
        <div className="menu-item-head">
            <h4>Мітки</h4><b className="menu-button-add" id="add-label"> + </b>
        </div>
        <div className="form-add-div" id="form-add-divlabel">
            <LabelsList/>
            <div className="menu-item-headbutton"><b>Нова мітка</b></div>
            <NewLabelForm/>
        </div>
    </div>
);

export default MenuLabels;