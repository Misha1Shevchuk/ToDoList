import React from "react";
import axios from 'axios';
import ChangeProject from './ChangeProject';

export default class LiProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showChangeProjectForm: false
        }
    }

    removeProject = async (event) => {
        event.preventDefault();
        console.warn('Видалити проект: ' + this.props.element.project);
        await axios.post(`/remove-project`, {
            id_project: this.props.element.id_project
        }).then(() => {
            this.props.getList();
        })
    }

    showChangeProjectForm = () => {
        if (this.state.showChangeProjectForm === false) {
            this.setState({ showChangeProjectForm: true });
        } else {
            this.setState({ showChangeProjectForm: false });
        }
    }

    render = () => {
        return (
            <li className="projects-list" id={"project-id-" + this.props.element.id_project}>
                { this.state.showChangeProjectForm ?
                    <ChangeProject showChangeProjectForm={this.showChangeProjectForm} getList={this.props.getList} element={this.props.element} />
                    : null }
                <span className="menu-span" id={"id-project-" + this.props.element.id_project}>  {this.props.element.project}  </span>
                <b id={"remove-project-button-" + this.props.element.id_project} onClick={this.removeProject} className="item-delete-button">X</b>
                <b id={"change-project-button-" + this.props.element.id_project} className="item-change-button" onClick={this.showChangeProjectForm}>✎</b>
            </li>
        );
    }
}