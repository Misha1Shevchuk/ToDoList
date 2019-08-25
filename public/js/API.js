getListProjectsFromServer();
getListLabelsFromServer();

window.onload = function() {
    // Page Behaviour
    document.body.onclick = function(event) {
        pageBehaviorFuncOnClick(event);
    }

    // Send form "New Task"
    document.getElementById("send-task").onclick = function(e) {
        e.preventDefault();
        // Get form data
        let formSendTask = document.forms["form-send-task"];
        let newTask = formSendTask.elements["newtask"].value;
        if (newTask != "") {
            // Serialize data to JSON
            let task = JSON.stringify({ newtask: newTask, id_project: projectId });
            let request = new XMLHttpRequest();
            // Send form to adress "/sendtask"
            request.open("POST", "/sendtask", true);
            request.setRequestHeader("Content-Type", "application/json");
            // Clear form
            document.getElementById('new-task').value = "";
            // Update list tasks
            getListTasksFromServer();
            request.send(task);
        }
    }

    // Send form "New Project"
    document.getElementById("send-project").onclick = function(e) {
        e.preventDefault();
        //Get form data
        let formSendProject = document.forms["form-send-project"];
        let newProject = formSendProject.elements["newproject"].value;
        if (newProject != "") {
            // Serialize data to JSON
            let project = JSON.stringify({ newproject: newProject });
            let request = new XMLHttpRequest();
            // Send form to adress "/sendproject"
            request.open("POST", "/sendproject", true);
            request.setRequestHeader("Content-Type", "application/json");
            // Clear form
            document.getElementById('new-project').value = "";
            // Update list projects
            getListProjectsFromServer();
            request.send(project);
        }
    }

    // Send form "New Label"
    document.getElementById("send-label").onclick = function(e) {
        e.preventDefault();
        //Get form data
        let formSendLabel = document.forms["form-send-label"];
        let newLabel = formSendLabel.elements["newlabel"].value;
        if (newLabel != "") {
            // Serialize data to JSON
            let label = JSON.stringify({ newlabel: newLabel });
            let request = new XMLHttpRequest();
            // Send form to adress "/sendlabel"
            request.open("POST", "/sendlabel", true);
            request.setRequestHeader("Content-Type", "application/json");
            // Clear form
            document.getElementById('new-label').value = "";
            // Update list labels
            getListLabelsFromServer();
            request.send(label);
        }
    }
}

function getListTasksFromServer() {
    let request = new XMLHttpRequest();
    request.open('GET', "/tasksList", true);
    request.responseType = 'json';
    request.send();
    request.onreadystatechange = function() {
        let data = request.response;
        displayListTasks(data);
    }
}

function getListProjectsFromServer() {
    let request = new XMLHttpRequest();
    request.open('GET', "/projectsList");
    request.responseType = 'json';
    request.send();
    request.onreadystatechange = function() {
        let data = request.response;
        displayListProjects(data);
    }
}

function getListLabelsFromServer() {
    let request = new XMLHttpRequest();
    request.open('GET', "/labelsList");
    request.responseType = 'json';
    request.send();
    request.onreadystatechange = function() {
        let data = request.response;
        displayListLabels(data);
    }
}

// Remove task
var removeTask = function(buttonRemoveId) {
    let id = Number(buttonRemoveId.substring(19));
    // Serialize data to JSON
    let task = JSON.stringify({ id_task: id });
    let request = new XMLHttpRequest();
    // Send form to adress "/remove-task"
    request.open("POST", "/remove-task", true);
    request.setRequestHeader("Content-Type", "application/json");
    // Remove this element
    document.getElementById('task-id-' + id).remove();
    // Update list tasks
    getListTasksFromServer();
    request.send(task);
}

// Remove project
var removeProject = function(buttonRemoveId) {
    let id = Number(buttonRemoveId.substring(22));
    // Serialize data to JSON
    let project = JSON.stringify({ id_project: id });
    let request = new XMLHttpRequest();
    // Send form to adress "/remove-project"
    request.open("POST", "/remove-project", true);
    request.setRequestHeader("Content-Type", "application/json");
    // Remove this element
    document.getElementById('project-id-' + id).remove();
    // Update list projects
    getListProjectsFromServer();
    request.send(project);
}

// Remove label
var removeLabel = function(buttonRemoveId) {
    let id = Number(buttonRemoveId.substring(20));
    // Serialize data to JSON
    let label = JSON.stringify({ id_label: id });
    let request = new XMLHttpRequest();
    // Send form to adress "/remove-label"
    request.open("POST", "/remove-label", true);
    request.setRequestHeader("Content-Type", "application/json");
    // Remove this element
    document.getElementById('label-id-' + id).remove();
    // Update list labels
    getListLabelsFromServer();
    request.send(label);
}

// Task checkbox active
var toggleTaskCheckbox = function(checkboxId) {
    let id = Number(checkboxId.substring(16));
    // Serialize data to JSON
    let bool;
    if (document.getElementById(checkboxId).checked) {
        bool = true;
    } else {
        bool = false;
    }
    let checkbox = JSON.stringify({ id_task: id, is_completed: bool });
    let request = new XMLHttpRequest();
    // Send form to adress "/task-checkbox-active"
    request.open("POST", "/task-checkbox-active", true);
    request.setRequestHeader("Content-Type", "application/json");
    // Remove this element
    document.getElementById('task-id-' + id).remove();
    request.send(checkbox);
    // Update list tasks
    getListTasksFromServer();
}