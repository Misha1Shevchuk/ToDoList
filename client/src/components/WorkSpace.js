import React from "react";
import NewTaskForm from "./Tasks/NewTaskForm";
import UnfinishedTasks from "./Tasks/UnfinishedTasks";
import FinishedTasks from "./Tasks/FinishedTasks";

const WorkSpace = () => (
<div className="work-space" id="work-space">
    <div class="add-task">
        <h3>Додати завдання</h3>
        <NewTaskForm/>
    </div>
    <div class="unfinished-tasks" id="unfinished-tasks-div">
        <h3>Незавершені завдання</h3>
        <UnfinishedTasks/>
    </div>
    <div class="label-tasks">
        <div id="label1"><span>Мітка 1</span></div>
        <div id="label2"><span>Мітка 2</span></div>
    </div>
    <div class="finished-tasks">
        <h3>Виконані завдання</h3>
        <FinishedTasks/>
    </div>
</div>
);

export default WorkSpace;