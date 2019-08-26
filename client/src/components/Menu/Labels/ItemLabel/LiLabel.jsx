import React from "react";
import axios from 'axios';
import ChangeLabel from '../ChangeLabelForm/ChangeLabel';
import classes from "../../stylesMenu/ItemLi.module.css";

export default class LiLabel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showChangeLabelForm: false
        }
    }

    removeLabel = async event => {
        event.preventDefault();
        console.warn('Видалити мітку: ' + this.props.element.label);
        await axios.post(`/remove-label`, {
            id_label: this.props.element.id_label
        }).then(() => {
            this.props.getList();
        })
    }

    showChangeLabelForm = () => {
        if (this.state.showChangeLabelForm === false) {
            this.setState({ showChangeLabelForm: true });
        } else {
            this.setState({ showChangeLabelForm: false });
        }
    }

    render() {
        return (
            <li className={classes.item_li}>
                {this.state.showChangeLabelForm ?
                    <ChangeLabel showChangeLabelForm={this.showChangeLabelForm} getList={this.props.getList}
                        element={this.props.element} />
                    : <div className={classes.item}>
                    <span className={classes.item_name}>  {this.props.element.label}</span>
                    <div className={classes.buttons_block}>
                        <button onClick={this.showChangeLabelForm} className={classes.item_change_button}>
                            <img src="img/pencil.svg" alt="change" />
                        </button>
                        <button onClick={this.removeLabel} className={classes.item_delete_button}>
                            <img src="img/remove.svg" alt="change" />
                        </button>
                    </div>
                </div>}
            </li>
        );
    }
}