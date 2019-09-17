import React from "react";
import classes from "../stylesMenu/ChangeItemForm.module.css";
import { changeProject } from "../../../_services/ProjectsRequest";

export default class ChangeProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newNameProject: this.props.element.project
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => this.setState({ newNameProject: event.target.value });

  handleSubmit = async event => {
    event.preventDefault();
    if (this.state.newNameProject.trim() !== "") {
      changeProject(
        this.props.element.id_project,
        this.state.newNameProject
      ).then(() => {
        this.props.showChangeProjectForm();
        this.props.getList();
      });
    } else {
      console.log("Enter new name of project");
    }
  };

  render() {
    return (
      <form
        className={classes.change_item_form}
        name="form-change-project"
        onSubmit={this.handleSubmit}
      >
        <input
          className={classes.input_name}
          type="text"
          name="NewProjectName"
          value={this.state.newNameProject}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="submit"
          className={classes.button_accept}
          onClick={this.handleSubmit}
          name="change-project"
          value="Змінити"
        />
        <input
          className={classes.button_cancel}
          type="reset"
          onClick={this.props.showChangeProjectForm}
          value="Скасувати"
        />
      </form>
    );
  }
}
