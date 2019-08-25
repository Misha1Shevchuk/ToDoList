import React from "react";
import axios from 'axios';

export default class ChangeProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newNameProject: this.props.element.project,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => this.setState({ newNameProject: event.target.value });

    handleSubmit = async event => {
        event.preventDefault();
        if(this.state.newNameProject !== "") {
            console.warn('Змінити проєкт: ' + this.props.element.project + " на " + this.state.newNameProject);
            await axios.post(`/change-project`, {
                id_project: this.props.element.id_project,
                project: this.state.newNameProject
            }).then(() => {
                this.props.showChangeProjectForm();
                this.props.getList();
            })
        } else {
            console.log("Enter new name of project");
        }
    }

    render() {
        return (
            <form id="form-change-project" name="form-change-project" onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.newNameProject} onChange={this.handleChange} />
                <input type="submit" value="Змінити" />
                <input type="reset" onClick={this.props.showChangeProjectForm} value="Скасувати" />
            </form>
        );
    }
}