import React from "react";
import axios from "axios";
import NewTaskForm from "./NewTaskForm";
import ItemTask from "./ItemTask";

export default class WorkSpace extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listFinishedTasks: [],
            listUnfinishedTasks: []
        };
    }

    componentWillMount = () => this.getList();

    getList = async () => {
        await axios.post(`/tasksList`).then(response => {
            this.setState({
                listFinishedTasks: response.data.map(task => {
                    if (task.is_completed) {
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
                }),
                listUnfinishedTasks: response.data.map(task => {
                    if (!task.is_completed) {
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
        });
    };

    render() {
        return (
            <div className="work-space" id="work-space">
                <div className="add-task">
                    <h3>Додати завдання</h3>
                    <NewTaskForm
                        activeProjectId={this.state.activeProjectId}
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