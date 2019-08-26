import React from "react";
import MenuProjects from './Projects/MenuProjects/MenuProjects';
import MenuLabels from "./Labels/MenuLabels/MenuLabels";
import classes from "./Menu.module.css";

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProject: null
        }
    }

    render() {
        return (
            <div className={classes.menu}>
                <MenuProjects selectedProject={this.props.selectedProject} />
                <MenuLabels />
            </div>
        );
    }
}