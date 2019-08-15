import React from "react";
import blockButtons from "../blockButtons";

export default class ItemProject extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
        }
    }

    render = () => {
        return (
            <li className="projects-list" id={"project-id-" + this.props.element.id_project}>
                <span className="menu-span" id={"id-project-" + this.props.element.id_project}>  {this.props.element.project}  </span>
                <b id={"change-project-button-" + this.props.element.id_project} className="three-points-button">✎</b>
                <b id={"remove-project-button-" + this.props.element.id_project} className="three-points-button">X</b>
            </li>
        );
    }
}