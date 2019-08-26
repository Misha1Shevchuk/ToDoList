import React from "react";
import axios from 'axios';
import NewProjectForm from '../NewProjectForm/NewProjectForm';
import LiProject from "../ItemProject/LiProject";
import classes from "./MenuProjects.module.css";

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
            <div className={classes.projects_block}>
                <div className={classes.head} onClick={this.toogleVisibilityList}>
                    <h4>Проекти</h4>
                    <button className={classes.head_button_plus}> + </button>
                </div>
                {this.state.showList ?
                    <div className={classes.projects_content}>
                        <ul className={classes.menu_list}>
                            {this.state.list}
                        </ul>
                        {this.state.showForm ? <NewProjectForm getList={this.getList}
                            toogleVisibilityForm={this.toogleVisibilityForm} /> 
                            : <button className={classes.new_project_button} onClick={this.toogleVisibilityForm}>Новий проект</button>}
                    </div>
                    : null}
            </div>
        );
    }
}