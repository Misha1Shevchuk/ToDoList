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
      res.sendStatus(200);
    });

    // When sent form newProject:
    app.post("/api/sendproject", jsonParser, (req, res) => {
      if (!req.body) return res.sendStatus(400);
      methodsDB.insertNewProject(req.body.newproject);
      res.sendStatus(200);
    });

    // When sent form newLabel:
    app.post("/api/sendlabel", jsonParser, (req, res) => {
      if (!req.body) return res.sendStatus(400);
      console.log(req.body);
      methodsDB.insertNewLabel(req.body.newlabel);
      res.sendStatus(200);
    });

    // Get tasks List
    app.post("/api/tasksList", jsonParser, (req, res) => {
      methodsDB.getTasks(req.body, res);
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
      res.sendStatus(200);
    });

    // Remove task
    app.post("/api/remove-task", jsonParser, (req, res) => {
      if (!req.body) return res.sendStatus(400);
      console.log(req.body);
      methodsDB.removeTask(req.body);
      res.sendStatus(200);
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
      res.sendStatus(200);
    });
  }
};
