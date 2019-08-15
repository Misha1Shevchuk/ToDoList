import React from "react";

export default class ItemProject extends React.Component {
    constructor (props) {
        super(props);
        
    }

    render = () => {
        return (
            <div className="buttons-block">
                <b className="item-change-button">✎ Редагувати</b>
                <b className="item-delete-button">X Видалити</b>
            </div>
        )
    }
}