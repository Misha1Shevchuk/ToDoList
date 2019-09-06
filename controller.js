// Import file with methods for work to DB
const express = require("express");
const methodsDB = require("./methodsDB");

module.exports = {
  configure: app => {
    // When sent form newTask:
    app.post("/sendtask", (req, res) => {
      if (!req.body) return res.sendStatus(400);
      methodsDB.insertNewTask(req.body);
      res.sendStatus(200);
    });

    // When sent form newProject:
    app.post("/sendproject", (req, res) => {
      if (!req.body) return res.sendStatus(400);
      methodsDB.insertNewProject(req.body.newproject);
      res.sendStatus(200);
    });

    // When sent form newLabel:
    app.post("/sendlabel", (req, res) => {
      if (!req.body) return res.sendStatus(400);
      console.log(req.body);
      methodsDB.insertNewLabel(req.body.newlabel);
      res.sendStatus(200);
    });

    // Get tasks List
    app.post("/tasksList", (req, res) => {
      methodsDB.getTasks(req.body, res);
    });

    // Get projects List
    app.post("/projectsList", (req, res) => {
      methodsDB.getProjects(res);
    });

    // Get labels List
    app.post("/labelsList", (req, res) => {
      methodsDB.getLabels(res);
    });

    // When task checkbox active
    app.post("/task-checkbox-active", (req, res) => {
      if (!req.body) return res.sendStatus(400);
      console.log(req.body);
      methodsDB.updateTaskIsCompleted(req.body);
      res.sendStatus(200);
    });

    // Remove task
    app.post("/remove-task", (req, res) => {
      if (!req.body) return res.sendStatus(400);
      console.log(req.body);
      methodsDB.removeTask(req.body);
      res.sendStatus(200);
    });

    // Remove project
    app.post("/remove-project", (req, res) => {
      if (!req.body) return res.sendStatus(400);
      console.log(req.body);
      methodsDB.removeProject(req.body);
      methodsDB.getProjects(res);
    });

    // Remove label
    app.post("/remove-label", (req, res) => {
      if (!req.body) return res.sendStatus(400);
      console.log(req.body);
      methodsDB.removeLabel(req.body);
      methodsDB.getLabels(res);
    });

    // Change Project
    app.post("/change-project", (req, res) => {
      if (!req.body) return res.sendStatus(400);
      console.log(req.body);
      methodsDB.changeProjectName(req.body);
      methodsDB.getProjects(res);
    });

    // Change Label
    app.post("/change-label", (req, res) => {
      if (!req.body) return res.sendStatus(400);
      console.log(req.body);
      methodsDB.changeLabelName(req.body);
      methodsDB.getLabels(res);
    });

    // Change Task
    app.post("/change-task", (req, res) => {
      if (!req.body) return res.sendStatus(400);
      console.log(req.body);
      methodsDB.changeTaskName(req.body);
      res.sendStatus(200);
    });
  }
};
