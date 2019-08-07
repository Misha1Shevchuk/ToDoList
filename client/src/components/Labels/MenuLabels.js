import React from "react";
import NewLabelForm from './NewLabelForm';
import LabelsList from "./LabelsList";

const MenuLabels = () => (      
    <div class="menu-item" id="item-label">
        <div class="menu-item-head" onclick="changeVisibility('form-add-divlabel');">
            <h4>Мітки</h4><b class="menu-button-add" id="add-label"> + </b>
        </div>
        <div class="form-add-div" id="form-add-divlabel">
            <LabelsList/>
            <div class="menu-item-headbutton" onclick="changeVisibility('form-send-label')"><b>Нова мітка</b></div>
            <NewLabelForm/>
        </div>
    </div>
);

export default MenuLabels;