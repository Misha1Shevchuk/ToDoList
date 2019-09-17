import axios from "axios";
import { config, proxy } from "./configs";

export const removeTask = async idTask => {
  return await axios
    .delete(proxy + `/api/tasks/${idTask}`, config)
    .then(response => response);
};

export const markTaskCompleted = async (idTask, isCompleted) => {
  return await axios
    .post(
      proxy + "/api/tasks/check/",
      {
        id_task: idTask,
        is_completed: isCompleted
      },
      config
    )
    .then(response => response);
};

export const getTasksList = async activeProjectId => {
  return await axios
    .get(proxy + `/api/tasks/${activeProjectId}`, config)
    .then(response => response);
};
