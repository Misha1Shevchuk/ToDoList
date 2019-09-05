import React from "react";
import axios from "axios";
import ChangeProject from "./ChangeProject";
import classes from "../stylesMenu/ItemLi.module.css";

import ChangeImg from "../../svg/ChangeImg";
import DeleteImg from "../../svg/DeleteImg";

export default class ProjectItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showChangeProjectForm: false
    };
  }

  removeProject = async event => {
    event.preventDefault();
    await axios
      .post(`/api/remove-project`, {
        id_project: this.props.element.id_project
      })
      .then(() => {
        this.props.getList();
      });
  };

  showChangeProjectForm = () => {
    if (this.state.showChangeProjectForm === false) {
      this.setState({ showChangeProjectForm: true });
    } else {
      this.setState({ showChangeProjectForm: false });
    }
  };

  render() {
    return (
      <div className={classes.item_li}>
        {this.state.showChangeProjectForm ? (
          <ChangeProject
            showChangeProjectForm={this.showChangeProjectForm}
            getList={this.props.getList}
            element={this.props.element}
          />
        ) : (
          <div className={classes.item}>
            <span className={classes.item_name}>
              {" "}
              {this.props.element.project}
            </span>
            <div className={classes.buttons_block}>
              <button
                onClick={this.showChangeProjectForm}
                className={classes.item_change_button}
              >
                <ChangeImg className={classes.img}/>
              </button>
              <button
                onClick={this.removeProject}
                className={classes.item_delete_button}
              >
                <DeleteImg className={classes.img}/>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
