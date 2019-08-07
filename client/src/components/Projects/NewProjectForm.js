import React from "react";

const NewProjectForm = () => ( 
    <form id="form-send-project" name="form-send-project">
        <input class="form-add-input" id="new-project" type="text" name="newproject" maxlength="50" autocomplete="off" /><br/>
        <input class="red-button-accept form-add-buttons" id="send-project" type="submit" name="send-project" value="Додати" />
        <input class="button-cancel form-add-buttons" id="reset-project" type="reset" value="Скасувати" onclick="changeVisibility('form-send-project');" />
    </form>
);

export default NewProjectForm;