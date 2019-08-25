import React from "react";
import MenuLabels from './Labels/MenuLabels';
import MenuProjects from './Projects/MenuProjects';

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
            <div className="menu">
                <MenuProjects selectedProject={this.selectedProject} />
                {/* <MenuLabels /> */}
            </div>
        );
    }
}