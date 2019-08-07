import React from "react";

const NewLabelForm = () => ( 
    <form id="form-send-label" name="form-send-label">
        <input class="form-add-input" id="new-label" type="text" name="newlabel" maxlength="50" autocomplete="off" /><br/>
        <input class="red-button-accept form-add-buttons" id="send-label" type="submit" name="send-label" value="Додати" />
        <input class="button-cancel form-add-buttons" id="reset-label" type="reset" value="Скасувати" onclick="changeVisibility('form-send-label');" />
    </form>
);

export default NewLabelForm;