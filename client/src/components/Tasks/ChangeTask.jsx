import React from "react";
import axios from "axios";
import classes from "../Menu/stylesMenu/ChangeItemForm.module.css";

export default class ChangeTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newNameTask: this.props.element.task
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => this.setState({ newNameTask: event.target.value });

  handleSubmit = async event => {
    event.preventDefault();
    if (this.state.newNameTask !== "") {
      console.warn(
        "Змінити task: " +
          this.props.element.task +
          " на " +
          this.state.newNameTask
      );
      await axios
        .post(`/change-task`, {
          id_task: this.props.element.id_task,
          task: this.state.newNameTask
        })
        .then(() => {
          this.props.showChangeTaskForm();
          this.props.getList();
        });
    } else {
      console.log("Enter new name of task");
    }
  };

  render() {
    return (
      <form
        className={classes.change_item_form}
        name="form-change-task"
        onSubmit={this.handleSubmit}
      >
        <input
          className={classes.input_name}
          type="text"
          value={this.state.newNameTask}
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
          onClick={this.props.showChangeTaskForm}
          value="Скасувати"
        />
      </form>
    );
  }
}
