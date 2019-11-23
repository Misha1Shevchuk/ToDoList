import React from "react";
import { getTasksList } from "../../../_services/TasksRequest";

import NewTaskForm from "../NewTaskForm/NewTaskForm";
import ItemTask from "../ItemTask/ItemTask";
import classes from "./WorkSpace.module.css";

export default class WorkSpace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listFinishedTasks: [],
      listUnfinishedTasks: []
    };
  }

  componentDidMount = () => this.getList();

  componentDidUpdate = prevProps => {
    if (prevProps.activeProjectId !== this.props.activeProjectId) {
      this.getList();
    }
  };

  getList = () => {
    getTasksList(this.props.activeProjectId).then(response => {
      this.makeListFinishedTasks(response.data);
      this.makeListUnfinishedTasks(response.data);
    });
  };

  makeListFinishedTasks = data => {
    this.setState({
      listFinishedTasks: data.map(task => {
        if (task.completed) {
          return (
            <ItemTask
              getList={this.getList}
              key={task._id}
              element={task}
            />
          );
        } else {
          return null;
        }
      })
    });
  };

  makeListUnfinishedTasks = data => {
    this.setState({
      listUnfinishedTasks: data.map(task => {
        if (!task.completed) {
          return (
            <ItemTask
              getList={this.getList}
              key={task._id}
              element={task}
            />
          );
        } else {
          return null;
        }
      })
    });
  };

  render() {
    return (
      <div className={classes.work_space}>
        <div>
          <h3>Додати завдання</h3>
          <NewTaskForm
            activeProjectId={this.props.activeProjectId}
            getList={this.getList}
          />
        </div>
        <div>
          <h3>Незавершені завдання</h3>
          <ul>{this.state.listUnfinishedTasks}</ul>
        </div>
        <div>
          <h3>Виконані завдання</h3>
          <ul className={classes.list_finished_tasks}>
            {this.state.listFinishedTasks}
          </ul>
        </div>
      </div>
    );
  }
}
