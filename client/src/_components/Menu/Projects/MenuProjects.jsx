import React from "react";
import NewProjectForm from "./NewProjectForm";
import ProjectItem from "./ProjectItem";
import classes from "../stylesMenu/MenuItems.module.css";
import { NavLink } from "react-router-dom";
import { getProjectsList } from "../../../_services/ProjectsRequest";

export default class MenuProjects extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      showForm: false,
      active: 0
    };
  }

  toogleVisibilityForm = () => {
    if (this.state.showForm) {
      this.setState({ showForm: false });
    } else {
      this.setState({ showForm: true });
    }
  };

  componentWillMount = async () => {
    let projects = await getProjectsList();
    this.makeProjectsList(projects);
  };

  makeProjectsList = data => {
    this.setState({
      list: data.map(p => {
        return (
          <NavLink
            className={classes.link}
            activeClassName={classes.active}
            key={p._id}
            to={`/home/project/${p._id}`}
          >
            <ProjectItem
              getList={async () => {
                let projects = await getProjectsList();
                this.makeProjectsList(projects);
              }}
              element={p}
            />
          </NavLink>
        );
      })
    });
  };

  render() {
    return (
      <div className={classes.items_block}>
        <div className={classes.head} onClick={this.toogleVisibilityForm}>
          <h4>Проекти</h4>
          <button className={classes.head_button_plus}> + </button>
        </div>
        <div className={classes.item_content}>
          <ul className={classes.menu_list}>{this.state.list}</ul>
          {this.state.showForm ? (
            <NewProjectForm
              getList={async () => {
                let projects = await getProjectsList();
                this.makeProjectsList(projects);
              }}
              toogleVisibilityForm={this.toogleVisibilityForm}
            />
          ) : (
            <button
              className={classes.new_item_button}
              onClick={this.toogleVisibilityForm}
            >
              Новий проект
            </button>
          )}
        </div>
      </div>
    );
  }
}
