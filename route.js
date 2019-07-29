// Import file with methods for work to DB
var express = require('express');
var methodsDB = require('./methodsDB');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
const jsonParser = express.json();

module.exports = {
    configure: function(app) {
        // When sent form newTask:
        app.post('/sendtask', jsonParser, function(req, res) {
            if (!req.body) return res.sendStatus(400);
            methodsDB.insertNewTask(req.body);
            res.sendFile(__dirname + "/web/index.html");
        });

        // When sent form newProject:
        app.post('/sendproject', jsonParser, function(req, res) {
            if (!req.body) return res.sendStatus(400);
            methodsDB.insertNewProject(req.body.newproject);
            res.sendFile(__dirname + "/web/index.html");
        });

        // When sent form newLabel:
        app.post('/sendlabel', jsonParser, function(req, res) {
            if (!req.body) return res.sendStatus(400);
            console.log(req.body);
            methodsDB.insertNewLabel(req.body.newlabel);
            res.sendFile(__dirname + "/web/index.html");
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
            res.sendFile(__dirname + "/web/index.html");
        });

        // Remove task
        app.post('/remove-task', jsonParser, function(req, res) {
            if (!req.body) return res.sendStatus(400);
            console.log(req.body);
            methodsDB.removeTask(req.body);
            res.sendFile(__dirname + "/web/index.html");
        });
    }
};