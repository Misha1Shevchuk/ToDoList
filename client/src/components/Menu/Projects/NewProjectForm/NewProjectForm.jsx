import React from "react";
import axios from 'axios';
import classes from "../../Labels/NewLabelForm/NewItemForm.module.css";

export default class NewProjectForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            project: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => this.setState({ project: event.target.value });
    
    handleSubmit = async event => {
        event.preventDefault();
        if (this.state.project !== "") {
            console.warn('Відправлений проєкт: ' + this.state.project);
            await axios.post(`/sendproject`, {
                newproject: this.state.project
            }).then(() => {
                this.clearForm();
                this.props.getList();
            })
        } else {
            console.log("Please, enter name of project");
        }
    }

    clearForm = () => {
        this.setState({ project: "" });
        this.props.toogleVisibilityForm();
    }

    render() {
        return (
            <form className={classes.form_send_item} name="form-send-project" onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.project} onChange={this.handleChange} 
                    className={classes.input_new_item} name="newproject" autoComplete="off" placeholder="Новий проєкт"/><br />
                <input type="submit" className={classes.button_accept} name="send-project" value="Додати" />
                <input type="reset" onClick={this.clearForm} className={classes.button_cancel} value="Скасувати" />
            </form>
        );
    }
}