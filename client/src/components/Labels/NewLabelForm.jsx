import React from "react";

class NewLabelForm extends React.Component {

    sendFormNewLabel (e) {
        e.preventDefault();
        //Get form data
        let formSendLabel = document.forms["form-send-label"];
        let newLabel = formSendLabel.elements["newlabel"].value;
        if (newLabel !== "") {
            // Serialize data to JSON
            let label = JSON.stringify({ newlabel: newLabel });
            let request = new XMLHttpRequest();
            // Send form to adress "/sendlabel"
            request.open("POST", "/sendlabel", true);
            request.setRequestHeader("Content-Type", "application/json");
            // Clear form
            document.getElementById('new-label').value = ""
            console.log(label);
            request.send(label);
            request.onreadystatechange = function (data) {
                // let json = data.target.response;
            }
        }
    }

    render() {
        return (
            <form id="form-send-label" name="form-send-label" onSubmit={this.sendFormNewLabel}>
                <input className="form-add-input" id="new-label" type="text" name="newlabel" autoComplete="off" /><br />
                <input className="red-button-accept form-add-buttons" id="send-label" type="submit" name="send-label" value="Додати" />
                <input className="button-cancel form-add-buttons" id="reset-label" type="reset" value="Скасувати" />
            </form>
        );
    }
}

export default NewLabelForm;