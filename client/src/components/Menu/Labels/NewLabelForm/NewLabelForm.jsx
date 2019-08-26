import React from "react";
import axios from 'axios';
import classes from "../../stylesMenu/NewItemForm.module.css";

export default class NewLabelsForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            label: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => this.setState({ label: event.target.value });
    
    handleSubmit = async event => {
        event.preventDefault();
        if (this.state.label !== "") {
            console.warn('Відправлена мітка: ' + this.state.label);
            await axios.post(`/sendlabel`, {
                newlabel: this.state.label
            }).then(() => {
                this.clearForm();
                this.props.getList();
            })
        } else {
            console.log("Please, enter name of label");
        }
    }

    clearForm = () => {
        this.setState({ label: "" });
        this.props.toogleVisibilityForm();
    }

    render() {
        return (
            <form className={classes.form_send_item} name="form-send-item" onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.label} onChange={this.handleChange}
                    className={classes.input_new_item} name="newlabel" autoComplete="off" placeholder="Нова мітка"/><br />
                <input type="submit" className={classes.button_accept} name="send-label" value="Додати" />
                <input type="reset" onClick={this.clearForm} className={classes.button_cancel} value="Скасувати" />
            </form>
        );
    }
}