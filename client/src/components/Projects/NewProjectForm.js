    import React from "react";

    const NewProjectForm = props => (
        <form id="form-send-project" name="form-send-project" onSubmit={props.sendFormNewProject}>
            <input className="form-add-input" id="new-project" type="text" name="newproject" autoComplete="off" /><br />
            <input className="red-button-accept form-add-buttons" id="send-project" type="submit" name="send-project" value="Додати"/>
            <input className="button-cancel form-add-buttons" id="reset-project" type="reset" value="Скасувати" />
        </form>
    );
    

export default NewProjectForm;