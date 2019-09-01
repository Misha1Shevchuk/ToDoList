// Import file with methods for work to DB
const express = require("express");
const methodsDB = require("./methodsDB");
const jsonParser = express.json();

module.exports = {
  configure: app => {
    // When sent form newTask:
    app.post("/api/sendtask", jsonParser, (req, res) => {
      if (!req.body) return res.sendStatus(400);
      methodsDB.insertNewTask(req.body);
      methodsDB.getTasks(res);
    });

    // When sent form newProject:
    app.post("/api/sendproject", jsonParser, (req, res) => {
      if (!req.body) return res.sendStatus(400);
      methodsDB.insertNewProject(req.body.newproject);
      methodsDB.getProjects(res);
    });

    // When sent form newLabel:
    app.post("/api/sendlabel", jsonParser, (req, res) => {
      if (!req.body) return res.sendStatus(400);
      console.log(req.body);
      methodsDB.insertNewLabel(req.body.newlabel);
      methodsDB.getLabels(res);
    });

    // Get tasks List
    app.post("/api/tasksList", (req, res) => {
      methodsDB.getTasks(res);
    });

    // Get projects List
    app.post("/api/projectsList", (req, res) => {
      methodsDB.getProjects(res);
    });

    // Get labels List
    app.post("/api/labelsList", (req, res) => {
      methodsDB.getLabels(res);
    });

    // When task checkbox active
    app.post("/api/task-checkbox-active", jsonParser, (req, res) => {
      if (!req.body) return res.sendStatus(400);
      console.log(req.body);
      methodsDB.updateTaskIsCompleted(req.body);
      methodsDB.getTasks(res);
    });

    // Remove task
    app.post("/api/remove-task", jsonParser, (req, res) => {
      if (!req.body) return res.sendStatus(400);
      console.log(req.body);
      methodsDB.removeTask(req.body);
      methodsDB.getTasks(res);
    });

    // Remove project
    app.post("/api/remove-project", jsonParser, (req, res) => {
      if (!req.body) return res.sendStatus(400);
      console.log(req.body);
      methodsDB.removeProject(req.body);
      methodsDB.getProjects(res);
    });

    // Remove label
    app.post("/api/remove-label", jsonParser, (req, res) => {
      if (!req.body) return res.sendStatus(400);
      console.log(req.body);
      methodsDB.removeLabel(req.body);
      methodsDB.getLabels(res);
    });

    // Change Project
    app.post("/api/change-project", jsonParser, (req, res) => {
      if (!req.body) return res.sendStatus(400);
      console.log(req.body);
      methodsDB.changeProjectName(req.body);
      methodsDB.getProjects(res);
    });

    // Change Label
    app.post("/api/change-label", jsonParser, (req, res) => {
      if (!req.body) return res.sendStatus(400);
      console.log(req.body);
      methodsDB.changeLabelName(req.body);
      methodsDB.getLabels(res);
    });

    // Change Task
    app.post("/api/change-task", jsonParser, (req, res) => {
      if (!req.body) return res.sendStatus(400);
      console.log(req.body);
      methodsDB.changeTaskName(req.body);
      methodsDB.getTasks(res);
    });
  }
};
