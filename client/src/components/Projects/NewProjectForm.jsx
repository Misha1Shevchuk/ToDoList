import React from "react";
import axios from 'axios';
import ItemProject from "./ItemProject";

class NewProjectForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            project: "",
            list: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({ project: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.warn('Відправлений проект: ' + this.state.project);
        axios.post(`http://localhost:3001/sendproject`, {
            newproject: this.state.project
        })
        this.props.getList();
        this.clearForm();
    }


    clearForm = () => {
        this.setState({ project: "" });
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

export default NewProjectForm;