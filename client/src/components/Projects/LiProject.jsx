import React from "react";
import axios from 'axios';

export default class LiProject extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
        }
    }

    removeProject = (event) => {
        event.preventDefault();
        console.warn('Видалити проект: ' + this.props.element.project);
        axios.post(`http://localhost:3001/remove-project`, {id_project: this.props.element.id_project});
        this.props.getList();
    }

    render = () => {
        return (
            <li className="projects-list" id={"project-id-" + this.props.element.id_project}>
                <span className="menu-span" id={"id-project-" + this.props.element.id_project}>  {this.props.element.project}  </span>
                <b id={"remove-project-button-" + this.props.element.id_project} onClick={this.removeProject} className="item-delete-button">X</b>
                <b id={"change-project-button-" + this.props.element.id_project} className="item-change-button">✎</b>
            </li>
        );
    }
}