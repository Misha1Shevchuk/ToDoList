import axios from "axios";
import { config, proxy } from "./configs";

export const getProjectsList = async () => {
  return await axios.get(proxy + "/api/projects/", config).then(response => {
    return response.data;
  });
};

export const changeProject = async (idProject, newProjectName) => {
  return await axios
    .post(
      proxy + "/api/projects/change-project",
      {
        id_project: idProject,
        project: newProjectName.replace(/\s+/g, " ").trim()
      },
      config
    )
    .then(response => {
      return response;
    });
};

export const newProject = async projectName => {
  await axios
    .post(
      proxy + "/api/projects/",
      {
        newproject: projectName.replace(/\s+/g, " ").trim()
      },
      config
    )
    .then(response => {
      return response;
    });
};

export const removeProject = async projectId => {
  return await axios
    .delete(proxy + `/api/projects/${projectId}`, config)
    .then(response => {
      return response;
    });
};
