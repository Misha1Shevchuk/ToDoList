import React from "react";

const NewTaskForm = () => ( 
    <form name="form-send-task">
        <input id="new-task" type="text" name="newtask" tabindex="1" maxlength="250" autocomplete="off" /><br/>
        <input class="red-button-accept" id="send-task" type="submit" name="send-task" value="Додати завдання" />
        <input class="button-cancel" type="reset" value="Скасувати" />
    </form>
);

export default NewTaskForm;