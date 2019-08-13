import React from "react";
import NewProjectForm from './NewProjectForm';
import ItemProject from "./ItemProject";

class MenuProjects extends React.Component {
    constructor() {
        super();
        this.state = {
            list: []
        };
        this.sendFormNewProject = this.sendFormNewProject.bind(this);
    }

    componentDidMount() {
        this.getObjetProject();   
    }

    getObjetProject () {
        fetch(`http://localhost:3001/projectsList`, { method: "POST" })
        .then(results => {
            return results.json();
        }).then(data => {
            console.log(data);
            let projects = data.map((proj) => {
                return (
                       <ItemProject key={proj.id_project} element={proj} />
                )
            })
            this.setState({list: projects});
        })
    }

    sendFormNewProject = async (e) => {
        e.preventDefault();

        let formSendProject = document.forms["form-send-project"];
        let newProject = formSendProject.elements["newproject"].value;
        if (newProject !== "") {
            // Serialize data to JSON
            let project = JSON.stringify({ newproject: newProject });
            let request = new XMLHttpRequest();
            // Send form to adress "/sendproject"
            request.open("POST", "/sendproject", true);
            request.setRequestHeader("Content-Type", "application/json");
            // Clear form
            document.getElementById('new-project').value = "";
            console.log(project);
            this.getObjetProject();
            request.send(project);
        }
    }

    render() {
        return (
            <div className="menu-item" id="item-project">
                <div className="menu-item-head" >
                    <h4>Проекти</h4><b className="menu-button-add" id="add-project"> + </b>
                </div>
                <div className="form-add-div" id="form-add-divproject">
                    <ul className="menu-list" id="ul-projects-list">
                        {this.state.list}
                    </ul>
                    <div className="menu-item-headbutton"><b>Новий проект</b></div>
                    <NewProjectForm sendFormNewProject={this.sendFormNewProject} />
                </div>
            </div>
        );
    }
}

export default MenuProjects;
