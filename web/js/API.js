getListTasksFromServer();
getListProjectsFromServer();
getListLabelsFromServer();

function getListTasksFromServer() {
    var request = new XMLHttpRequest();
    request.open('GET', "/tasksList");
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var data = request.response;
        displayListTasks(data);
    }
}

function getListProjectsFromServer() {
    var request = new XMLHttpRequest();
    request.open('GET', "/projectsList");
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var data = request.response;
        displayListProjects(data);
    }
}

function getListLabelsFromServer() {
    var request = new XMLHttpRequest();
    request.open('GET', "/labelsList");
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var data = request.response;
        displayListLabels(data);
    }
}

window.onload = function() {

    // Send form "New Task"
    document.getElementById("send-task").onclick = function(e) {
        e.preventDefault();
        //Get form data
        let formSendTask = document.forms["form-send-task"];
        let newTask = formSendTask.elements["newtask"].value;
        if (newTask != "") {
            // Serialize data to JSON
            let task = JSON.stringify({ newtask: newTask, id_project: "25" });
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

    // Page Behaviour

    document.body.onclick = function(event) {
        t = event.target || event.srcElement;

        // If task checkbox clicked 
        if (t.id.includes("checkbox-number-")) {
            toggleTaskCheckbox(t.id);
        }
        if (t.id.includes("remove-task-button-")) {
            removeTask(t.id);
        }
    }

}

function displayListTasks(data) {
    for (const id in data) {
        // Check that there is no record on the page
        if (!document.getElementById('task-id-' + data[id].id_task)) {
            let newLi = document.createElement('li');
            newLi.setAttribute('id', 'task-id-' + data[id].id_task);
            if (data[id].is_completed == 0) {
                newLi.innerHTML = '<input type="checkbox" id="checkbox-number-' + data[id].id_task + '" class="check"><span class="task">' + data[id].task + '</span><b class="workspace-change-button">🖉</b><b id="remove-task-button-' + data[id].id_task + '" class="workspace-delete-button">X</b>';
                document.getElementById("ul-unfinished-tasks").insertBefore(newLi, document.getElementById("ul-unfinished-tasks").firstChild);
            } else {
                newLi.innerHTML = '<input type="checkbox" checked id="checkbox-number-' + data[id].id_task + '" class="check"><span class="task">' + data[id].task + '</span><b class="workspace-change-button">🖉</b><b id="remove-task-button-' + data[id].id_task + '" class="workspace-delete-button">X</b>';
                document.getElementById("ul-finished-tasks").insertBefore(newLi, document.getElementById("ul-finished-tasks").firstChild);
            }
        }
    }
}

function displayListProjects(data) {
    for (const id in data) {
        if (!document.getElementById('project-id-' + data[id].id_project)) {
            let newLi = document.createElement('li');
            newLi.className = 'projects-list';
            newLi.setAttribute('id', 'project-id-' + data[id].id_project);
            newLi.innerHTML = '<span class="menu-span">' + data[id].project + '</span><b class="three-points-button">···</b>';
            document.getElementById('ul-projects-list').insertBefore(newLi, document.getElementById('ul-projects-list').firstChild);
        }
    }
}

function displayListLabels(data) {
    for (const id in data) {
        if (!document.getElementById('label-id-' + data[id].id_label)) {
            let newLi = document.createElement('li');
            newLi.className = 'labels-list';
            newLi.setAttribute('id', 'label-id-' + data[id].id_label);
            newLi.innerHTML = '<span class="menu-span">' + data[id].label + '</span><b class="three-points-button">···</b>';
            document.getElementById('ul-labels-list').insertBefore(newLi, document.getElementById('ul-labels-list').firstChild);
        }
    }
}



// Task checkbox active
var toggleTaskCheckbox = function(checkboxId) {
    let id = Number(checkboxId.substring(16));
    // Serialize data to JSON
    if (document.getElementById(checkboxId).checked) {
        var bool = true;
    } else {
        var bool = false;
    }
    let checkbox = JSON.stringify({ id_task: id, is_completed: bool });
    let request = new XMLHttpRequest();
    // Send form to adress "/task-checkbox-active"
    request.open("POST", "/task-checkbox-active", true);
    request.setRequestHeader("Content-Type", "application/json");
    // Remove this element
    document.getElementById('task-id-' + id).remove();
    // Update list tasks
    getListTasksFromServer();
    request.send(checkbox);
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