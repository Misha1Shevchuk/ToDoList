import React from "react";
import axios from 'axios';

export default class NewProjectForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            project: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({ project: event.target.value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        if (this.state.project !== "") {
            console.warn('Відправлений проект: ' + this.state.project);
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

    render = () => {
        return (
            <form id="form-send-project" name="form-send-project" onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.project} onChange={this.handleChange} className="form-add-input" id="new-project" name="newproject" autoComplete="off" /><br />
                <input type="submit" className="red-button-accept form-add-buttons" id="send-project" name="send-project" value="Додати" />
                <input type="reset" onClick={this.clearForm} className="button-cancel form-add-buttons" id="reset-project" value="Скасувати" />
            </form>
        );
    }
}