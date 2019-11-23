import React from "react";
import axios from "axios";
import classes from "../../Menu/stylesMenu/NewItemForm.module.css";
import {proxy} from "../../../_services/configs";

export default class NewTaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => this.setState({task: event.target.value});

    handleSubmit = async event => {
        event.preventDefault();
        if (this.state.task.trim() !== "") {
            let config = {
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("userData")
                }
            };
            await axios
                .post(`${proxy}/api/tasks/`,
                    {
                        newtask: this.state.task.replace(/\s+/g, " ").trim(),
                        id_project: this.props.activeProjectId
                    },
                    config
                )
                .then(() => {
                    this.clearForm();
                    this.props.getList();
                });
        } else {
            console.log("Please, enter name of task");
        }
    };

    clearForm = () => {
        this.setState({task: ""});
    };

    render() {
        return (
            <form
                className={classes.form_send_item}
                name="form-send-task"
                onSubmit={this.handleSubmit}
            >
                <input
                    type="text"
                    value={this.state.task}
                    onChange={this.handleChange}
                    className={classes.input_new_item}
                    name="newtask"
                    autoComplete="off"
                    placeholder="Нове завдання"
                />
                <br/>
                <input
                    type="submit"
                    className={classes.button_accept}
                    name="send-task"
                    value="Додати"
                />
                <input
                    type="reset"
                    onClick={this.clearForm}
                    className={classes.button_cancel}
                    value="Скасувати"
                />
            </form>
        );
    }
}
