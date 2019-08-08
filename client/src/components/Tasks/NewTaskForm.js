import React from "react";

class NewTaskForm extends React.Component {
    sendFormNewTask(e) {
        e.preventDefault();
        // Get form data
        let formSendTask = document.forms["form-send-task"];
        let newTask = formSendTask.elements["newtask"].value;
        if (newTask !== "") {
            // Serialize data to JSON
            let task = JSON.stringify({ newtask: newTask, id_project: 26 });
            let request = new XMLHttpRequest();
            // Send form to adress "/sendtask"
            request.open("POST", "/sendtask", true);
            request.setRequestHeader("Content-Type", "application/json");
            // Clear form
            document.getElementById('new-task').value = "";
            request.send(task);
            console.log(task);
            request.onreadystatechange = function (data) {
                // let json = data.target.response;
            }
        }
    }
    render() {
        return (
            <form name="form-send-task" onSubmit={this.sendFormNewTask}>
                <input id="new-task" type="text" name="newtask" autoComplete="off" /><br />
                <input className="red-button-accept" id="send-task" type="submit" name="send-task" value="Додати завдання" />
                <input className="button-cancel" type="reset" value="Скасувати" />
            </form>
        );
    }
}
export default NewTaskForm;