// Import file with methods for work to DB
var express = require('express');
var methodsDB = require('./methodsDB');
const jsonParser = express.json();

module.exports = {
    configure: function(app) {
        // When sent form newTask:
        app.post('/sendtask', jsonParser, function(req, res) {
            if (!req.body) return res.sendStatus(400);
            methodsDB.insertNewTask(req.body);
        });

        // When sent form newProject:
        app.post('/sendproject', jsonParser, function(req, res) {
            if (!req.body) return res.sendStatus(400);
            methodsDB.insertNewProject(req.body.newproject);
        });

        // When sent form newLabel:
        app.post('/sendlabel', jsonParser, function(req, res) {
            if (!req.body) return res.sendStatus(400);
            console.log(req.body);
            methodsDB.insertNewLabel(req.body.newlabel);
        });

        // Get tasks List
        app.get('/tasksList', function(req, res) {
            methodsDB.getTasks(res);
        });

        // Get projects List
        app.get('/projectsList', function(req, res) {
            methodsDB.getProjects(res);
        });

        // Get labels List
        app.get('/labelsList', function(req, res) {
            methodsDB.getLabels(res);
        });

        // When task checkbox active
        app.post('/task-checkbox-active', jsonParser, function(req, res) {
            if (!req.body) return res.sendStatus(400);
            console.log(req.body);
            methodsDB.updateTaskIsCompleted(req.body);
            res.render("index");
        });

        // Remove task
        app.post('/remove-task', jsonParser, function(req, res) {
            if (!req.body) return res.sendStatus(400);
            console.log(req.body);
            methodsDB.removeTask(req.body);
        });

        // Remove project
        app.post('/remove-project', jsonParser, function(req, res) {
            if (!req.body) return res.sendStatus(400);
            console.log(req.body);
            methodsDB.removeProject(req.body);
        });

        // Remove label
        app.post('/remove-label', jsonParser, function(req, res) {
            if (!req.body) return res.sendStatus(400);
            console.log(req.body);
            methodsDB.removeLabel(req.body);
        });
    }
};