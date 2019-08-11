import React from "react";
import NewProjectForm from './NewProjectForm';
import ProjectsList from './ProjectsList';

class MenuProjects extends React.Component {
    constructor() {
        super();
        this.state = {
            list: "Тут має бути якийсь проєкт"
        };
        this.sendFormNewProject = this.sendFormNewProject.bind(this);
    }

    // componentDidMount() {
    //     this.getObjetProject();
    // }

    getObjetProject() {
        let request = new XMLHttpRequest();
        request.open('GET', "/projectsList");
        request.responseType = 'json';
        request.send();
        request.onreadystatechange = function () {
            let json = request.response;
            // console.log(JSON.stringify(json));
            this.setState ({ list: json });

        }


        
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
            request.send(project);
            this.getObjetProject();
            // let obj = this.getObjetProject ();
            // for(const key in obj) {
            //     console.log(obj[key].project);
            // }
            // this.Object = ({ list: obj});
        }
    }

    render() {
        let obj = this.state.list;
        for (const key in obj) {
            console.log("\nMy list is:" + obj[key].project);
        }
        return (
            <div className="menu-item" id="item-project">
                <div className="menu-item-head" >
                    <h4>Проекти</h4><b className="menu-button-add" id="add-project"> + </b>
                </div>
                <div className="form-add-div" id="form-add-divproject">
                    <ProjectsList list={this.state.list} />
                    <div className="menu-item-headbutton"><b>Новий проект</b></div>
                    <NewProjectForm sendFormNewProject={this.sendFormNewProject} />
                </div>
            </div>
        );
    }
}

export default MenuProjects;
