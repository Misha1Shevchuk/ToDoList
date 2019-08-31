import React from "react";
import axios from "axios";
import NewProjectForm from "./NewProjectForm";
import LiProject from "./LiProject";
import classes from "../stylesMenu/MenuItems.module.css";
import { NavLink, BrowserRouter } from "react-router-dom";

export default class MenuProjects extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      showForm: false,
      showList: true,
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

  toogleVisibilityList = () => {
    if (this.state.showList) {
      this.setState({ showList: false, showForm: false });
    } else {
      this.setState({ showList: true });
    }
  };

  componentWillMount = () => this.getList();

  selectProject = async id => {
    await this.setState({ active: id });
    this.props.activeProjectId(this.state.active);
  };

  getList = async () => {
    await axios.post(`/projectsList`).then(response => {
      this.setState({
        list: response.data.map(proj => {
          return (
            <NavLink
              className={classes.link}
              activeClassName={classes.active}
              key={proj.id_project}
              to={`/projects/${proj.id_project}`}
            >
              <LiProject
                selectProject={this.selectProject}
                getList={this.getList}
                element={proj}
              />
            </NavLink>
          );
        })
      });
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className={classes.items_block}>
          <div className={classes.head} onClick={this.toogleVisibilityList}>
            <h4>Проекти</h4>
            <button className={classes.head_button_plus}> + </button>
          </div>
          {this.state.showList ? (
            <div className={classes.item_content}>
              <ul className={classes.menu_list}>{this.state.list}</ul>
              {this.state.showForm ? (
                <NewProjectForm
                  getList={this.getList}
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
          ) : null}
        </div>
      </BrowserRouter>
    );
  }
}
