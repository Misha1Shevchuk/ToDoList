/****       LOGIC          ****/
var test = function(element) {
    console.log(element);
}
var projectId = 0;
var pageBehaviorFuncOnClick = function(event) {
    t = event.target || event.srcElement;
    test(t.id);
    if (t.id.includes("project-id-") || t.id.includes("id-project-")) {
        selectProject(t.id);
    }
    // If task checkbox clicked 
    if (!t.id.includes('buttons-block')) {
        hideDiv();
    }
    if (t.id.includes("checkbox-number-")) {
        toggleTaskCheckbox(t.id);
    } else if (t.id.includes("three-points-button-task-")) {
        createDivForTask(t.id);
    } else if (t.id.includes("three-points-button-project-")) {
        createDivForProject(t.id);
    } else if (t.id.includes("three-points-button-label-")) {
        createDivForLabel(t.id);
    } else if (t.id.includes("remove-task-button-")) {
        removeTask(t.id);
    } else if (t.id.includes("remove-project-button-")) {
        removeProject(t.id);
    } else if (t.id.includes("remove-label-button-")) {
        removeLabel(t.id);
    }
    if (t.id.includes("project-id-") || t.id.includes("id-project-")) {
        selectProject(t.id);
    }
}

var selectProject = function(id) {
    projectId = Number(id.substring(11));
    let projectsList = document.getElementsByClassName("projects-list");
    for (var i = 0; i < projectsList.length; i++) {
        projectsList[i].classList.remove('selected');
    }
    document.getElementById("project-id-" + projectId).classList.add('selected');
    document.getElementById("work-space").style.display = "block";
    getListTasksFromServer();
}

var createDivForTask = function(threePointsId) {
    console.log("add label task");
    id = Number(threePointsId.substring(25));
    document.getElementById('buttons-block-task-' + id).classList.toggle('show');
}

var createDivForProject = function(threePointsId) {
    console.log("add project div");
    id = Number(threePointsId.substring(28));
    document.getElementById('buttons-block-project-' + id).classList.toggle('show');
}

var createDivForLabel = function(threePointsId) {
    console.log("add label div");
    id = Number(threePointsId.substring(26));
    document.getElementById('buttons-block-label-' + id).classList.toggle('show');
}

var hideDiv = function() {
    var listDiv = document.getElementsByClassName('buttons-block');
    for (var i = 0; i < listDiv.length; i++) {
        if (listDiv[i].classList.contains("show")) {
            listDiv[i].classList.toggle('show');
        }
    }
}

/****         DISPLAY LISTS       ****/

function displayListTasks(data) {
    for (const id in data) {
        if (data[id].id_project == projectId) {
            // Check that there is no record on the page
            if (!document.getElementById('task-id-' + data[id].id_task)) {
                let newLi = document.createElement('li');
                newLi.className = "tasks-class"
                newLi.setAttribute('id', 'task-id-' + data[id].id_task);
                if (data[id].is_completed == 0) {
                    newLi.innerHTML = '<input type="checkbox" id="checkbox-number-' + data[id].id_task + '" class="check"><span class="task">' + data[id].task + '</span><b id="three-points-button-task-' + data[id].id_task + '" class="three-points-button">···</b><div class="buttons-block" id="buttons-block-task-' + data[id].id_task + '"><b id="change-task-button-' + data[id].id_task + '" class="item-change-button">🖉 Редагувати</b><b id="remove-task-button-' + data[id].id_task + '" class="item-delete-button">X Видалити</b></div>';

                    document.getElementById("ul-unfinished-tasks").insertBefore(newLi, document.getElementById("ul-unfinished-tasks").firstChild);
                } else {
                    newLi.innerHTML = '<input type="checkbox" checked id="checkbox-number-' + data[id].id_task + '" class="check"><span class="task">' + data[id].task + '</span><b id="three-points-button-task-' + data[id].id_task + '" class="three-points-button">···</b><div class="buttons-block" id="buttons-block-task-' + data[id].id_task + '"><b id="change-task-button-' + data[id].id_task + '" class="item-change-button">🖉 Редагувати</b><b id="remove-task-button-' + data[id].id_task + '" class="item-delete-button">X Видалити</b></div>';

                    document.getElementById("ul-finished-tasks").insertBefore(newLi, document.getElementById("ul-finished-tasks").firstChild);
                }
            }
        } else {
            try {
                document.getElementById('task-id-' + data[id].id_task).remove();
            } catch (err) {}
        }
    }
}

function displayListProjects(data) {
    for (const id in data) {
        if (!document.getElementById('project-id-' + data[id].id_project)) {
            let newLi = document.createElement('li');
            newLi.className = 'projects-list';
            newLi.setAttribute('id', 'project-id-' + data[id].id_project);
            newLi.innerHTML = '<span class="menu-span" id="id-project-' + data[id].id_project + '">' + data[id].project + '</span><b id="three-points-button-project-' + data[id].id_project + '" class="three-points-button">···</b><div class="buttons-block" id="buttons-block-project-' + data[id].id_project + '"><b id="change-project-button-' + data[id].id_project + '" class="item-change-button">🖉 Редагувати</b><b id="remove-project-button-' + data[id].id_project + '" class="item-delete-button">X Видалити</b></div>';

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
            newLi.innerHTML = '<span id="id-label' + data[id].id_label + '" class="menu-span">' + data[id].label + '</span><b id="three-points-button-label-' + data[id].id_label + '" class="three-points-button">···</b><div class="buttons-block" id="buttons-block-label-' + data[id].id_label + '"><b id="change-label-button-' + data[id].id_label + '" class="item-change-button">🖉 Редагувати</b><b id="remove-label-button-' + data[id].id_label + '" class="item-delete-button">X Видалити</b></div>';

            document.getElementById('ul-labels-list').insertBefore(newLi, document.getElementById('ul-labels-list').firstChild);
        }
    }
}

/****         Animations       ****/

// Show / Hide element with some id on html page

// function changeVisibility(id) {
//     var e = document.getElementById(id);
//     if (e.style.display == 'block') {
//         e.style.display = 'none';
//     } else {
//         e.style.display = 'block';
//     }
// }

// new version show/hide element with some id on html page with animation
function changeVisibility(id) {
    $('#' + id).slideToggle(200);
}