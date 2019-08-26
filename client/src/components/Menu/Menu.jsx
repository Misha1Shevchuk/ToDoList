import React from "react";
import MenuProjects from './Projects/MenuProjects/MenuProjects';
import classes from "./Menu.module.css";

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProject: null
        }
    }

    selectedProject = (id) => {
        this.setState({ selectedProject: id });
        console.log(id);
    }

    render = () => {
        return (
            <div className={classes.menu}>
                <MenuProjects selectedProject={this.selectedProject} />
            </div>
        );
    }
}