import React from "react";
import axios from "axios";
import classes from "./ItemTask.module.css";
import ChangeTask from "./ChangeTask";

export default class ItemTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showChangeTaskForm: false,
      isCompleted: this.props.element.is_completed
    };
  }

  removeTask = async event => {
    event.preventDefault();
    console.warn("Видалити завдання: " + this.props.element.task);
    await axios
      .post(`/remove-task`, {
        id_task: this.props.element.id_task
      })
      .then(() => {
        this.props.getList();
      });
  };

  markCompleted = async event => {
    event.preventDefault();
    console.warn("Позначити завдання виконаним: " + this.props.element.task);
    await axios
      .post(`/task-checkbox-active`, {
        id_task: this.props.element.id_task,
        is_completed: !this.state.isCompleted
      })
      .then(() => {
        this.props.getList();
      });
  };

  showChangeTaskForm = () => {
    if (this.state.showChangeTaskForm === false) {
      this.setState({ showChangeTaskForm: true });
    } else {
      this.setState({ showChangeTaskForm: false });
    }
  };

  render() {
    return (
      <li className={classes.item_li}>
        {this.state.showChangeTaskForm ? (
          <ChangeTask
            showChangeTaskForm={this.showChangeTaskForm}
            getList={this.props.getList}
            element={this.props.element}
          />
        ) : (
          <div className={classes.item}>
            <input
              onClick={this.markCompleted}
              defaultChecked={this.state.isCompleted}
              type="checkbox"
              id={`checkbox_${this.props.element.id_task}`}
              className={classes.checkbox}
            />
            <label htmlFor={`checkbox_${this.props.element.id_task}`}></label>
            <span className={classes.item_name}>
              {" "}
              {this.props.element.task}
            </span>
            <div className={classes.buttons_block}>
              <button
                onClick={this.showChangeTaskForm}
                className={classes.item_change_button}
              >
                <img src="img/pencil.svg" alt="change" />
              </button>
              <button
                onClick={this.removeTask}
                className={classes.item_delete_button}
              >
                <img src="img/remove.svg" alt="change" />
              </button>
            </div>
          </div>
        )}
      </li>
    );
  }
}
