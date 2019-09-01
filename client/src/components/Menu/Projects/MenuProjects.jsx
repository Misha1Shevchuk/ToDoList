import React from "react";
import axios from "axios";
import NewProjectForm from "./NewProjectForm";
import ItemProject from "./ItemProject";
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

  getList = async () => {
    await axios.post(`/projectsList`).then(response => {
      this.setState({
        list: response.data.map(p => {
          return (
            <NavLink
              className={classes.link}
              activeClassName={classes.active}
              key={p.id_project}
              to={`/project/${p.id_project}`}
            >
              <ItemProject
                getList={this.getList}
                element={p}
              />
            </NavLink>
          );
        })
      });
    });
  };

  render() {
    return (
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
    );
  }
}
