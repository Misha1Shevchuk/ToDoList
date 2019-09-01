import React from "react";
import axios from "axios";
import classes from "../stylesMenu/ChangeItemForm.module.css";

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
    if (this.state.newNameProject !== "") {
      await axios
        .post(`/api/change-project`, {
          id_project: this.props.element.id_project,
          project: this.state.newNameProject
        })
        .then(() => {
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
          value={this.state.newNameProject}
          onChange={this.handleChange}
        />
        <br />
        <input
          className={classes.button_accept}
          type="submit"
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
