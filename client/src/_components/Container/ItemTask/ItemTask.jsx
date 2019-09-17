import React from "react";
import classes from "./ItemTask.module.css";
import ChangeTask from "../ChangeTaskForm/ChangeTask";
import { removeTask, markTaskCompleted } from "../../../_services/TasksRequest";

import ChangeImg from "../../svg/ChangeImg";
import DeleteImg from "../../svg/DeleteImg";

export default class ItemTask extends React.Component {
  markCompleted = async event => {
    event.preventDefault();
    markTaskCompleted(
      this.props.element.id_task,
      !this.props.element.is_completed
    ).then(() => {
      this.props.getList();
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      showChangeTaskForm: false,
      isCompleted: this.props.element.is_completed
    };
  }

  removeTask = async event => {
    event.preventDefault();
    removeTask(this.props.element.id_task).then(() => {
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
                <ChangeImg className={classes.img} />
              </button>
              <button
                onClick={this.removeTask}
                className={classes.item_delete_button}
              >
                <DeleteImg className={classes.img} />
              </button>
            </div>
          </div>
        )}
      </li>
    );
  }
}
