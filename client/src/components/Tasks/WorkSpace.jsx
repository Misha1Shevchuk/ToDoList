import React from "react";
import axios from "axios";
import NewTaskForm from "./NewTaskForm";
import ItemTask from "./ItemTask";

export default class WorkSpace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      listFinishedTasks: [],
      listUnfinishedTasks: []
    };
  }

  componentDidMount = () => this.getList();

  componentDidUpdate(prevProps) {
    if (prevProps.activeProjectId !== this.props.activeProjectId) {
      this.makeListFinishedTasks(this.state.list);
      this.makeListUnfinishedTasks(this.state.list);
    }
  }

  getList = async () => {
    await axios.post(`/api/tasksList`).then(response => {
      this.setState({ list: response.data });
      this.makeListFinishedTasks(this.state.list);
      this.makeListUnfinishedTasks(this.state.list);
    });
  };

  makeListFinishedTasks = data => {
    this.setState({
      listFinishedTasks: data.map(task => {
        if (
          task.is_completed &&
          this.props.activeProjectId == task.id_project
        ) {
          return (
            <ItemTask
              getList={this.getList}
              key={task.id_task}
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
        if (
          !task.is_completed &&
          this.props.activeProjectId == task.id_project
        ) {
          return (
            <ItemTask
              getList={this.getList}
              key={task.id_task}
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
      <div className="work-space" id="work-space">
        <div className="add-task">
          <h3>Додати завдання</h3>
          <NewTaskForm
            activeProjectId={this.props.activeProjectId}
            getList={this.getList}
          />
        </div>
        <div className="unfinished-tasks" id="unfinished-tasks-div">
          <h3>Незавершені завдання</h3>
          <ul id="ul-finished-tasks">{this.state.listUnfinishedTasks}</ul>
        </div>
        {/* <div className="label-tasks">
                <div id="label1"><span>Мітка 1</span></div>
                <div id="label2"><span>Мітка 2</span></div>
            </div> */}
        <div className="finished-tasks">
          <h3>Виконані завдання</h3>
          <ul id="ul-unfinished-tasks">{this.state.listFinishedTasks}</ul>
        </div>
      </div>
    );
  }
}
