import React from "react";
import NewTaskForm from "./Tasks/NewTaskForm";
import UnfinishedTasks from "./Tasks/UnfinishedTasks";
import FinishedTasks from "./Tasks/FinishedTasks";

const WorkSpace = () => (
<div className="work-space" id="work-space">
    <div className="add-task">
        <h3>Додати завдання</h3>
        <NewTaskForm/>
    </div>
    <div className="unfinished-tasks" id="unfinished-tasks-div">
        <h3>Незавершені завдання</h3>
        <UnfinishedTasks/>
    </div>
    <div className="label-tasks">
        <div id="label1"><span>Мітка 1</span></div>
        <div id="label2"><span>Мітка 2</span></div>
    </div>
    <div className="finished-tasks">
        <h3>Виконані завдання</h3>
        <FinishedTasks/>
    </div>
</div>
);

export default WorkSpace;