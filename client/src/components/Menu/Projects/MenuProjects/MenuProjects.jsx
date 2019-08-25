import React from "react";
import axios from 'axios';
import NewProjectForm from '../NewProjectForm/NewProjectForm';
import LiProject from "../ItemProject/LiProject";

export default class MenuProjects extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [],
            showForm: false,
            showList: true
        };
    }

    toogleVisibilityForm = () => {
        if (this.state.showForm) {
            this.setState({ showForm: false })
        } else {
            this.setState({ showForm: true })
        }
    }

    toogleVisibilityList = () => {
        if (this.state.showList) {
            this.setState({ showList: false, showForm: false })
        } else {
            this.setState({ showList: true })
        }
    }

    componentDidMount = () => this.getList();

    getList = async () => {
        await axios.post(`/projectsList`).then(response => {
            console.warn(response.data);
            this.setState({
                list: response.data.map((proj) => {
                    return (
                        <LiProject onClick={this.props.selectedProject(proj.id_project)} getList={this.getList}
                            key={proj.id_project} element={proj} />
                    )
                })
            })
        })
    }

    render() {
        return (
            <div className="menu-item" id="item-project">
                <div className="menu-item-head" onClick={this.toogleVisibilityList}>
                    <h4>Проекти</h4><b className="menu-button-add" id="add-project"> + </b>
                </div>
                {this.state.showList ?
                    <div className="form-add-div" id="form-add-divproject">
                        <ul className="menu-list" id="ul-projects-list">
                            {this.state.list}
                        </ul>
                        <div className="menu-item-headbutton" onClick={this.toogleVisibilityForm}>
                            <b>Новий проект</b>
                        </div>
                        {this.state.showForm ? <NewProjectForm getList={this.getList}
                            toogleVisibilityForm={this.toogleVisibilityForm} /> : null}
                    </div>
                    : null}
            </div>
        );
    }
}