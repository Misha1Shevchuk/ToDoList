// Import file with methods for work to DB
const express = require('express');
const methodsDB = require('./methodsDB');
const jsonParser = express.json();

module.exports = {
    configure: function(app) {
        app.use((req, res, next)=>{
            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        
            // Request methods you wish to allow
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        
            // Request headers you wish to allow
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        
            // Set to true if you need the website to include cookies in the requests sent
            // to the API (e.g. in case you use sessions)
            res.setHeader('Access-Control-Allow-Credentials', true);
        
            // Pass to next layer of middleware
            next();
        });

        // When sent form newTask:
        app.post('/sendtask', jsonParser, function(req, res) {
            if (!req.body) return res.sendStatus(400);
            methodsDB.insertNewTask(req.body);
            methodsDB.getTasks(res);
        });

        // When sent form newProject:
        app.post('/sendproject', jsonParser, function(req, res) {
            // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
            if (!req.body) return res.sendStatus(400);
            methodsDB.insertNewProject(req.body.newproject);
            methodsDB.getProjects(res);
        });

        // When sent form newLabel:
        app.post('/sendlabel', jsonParser, function(req, res) {
            if (!req.body) return res.sendStatus(400);
            console.log(req.body);
            methodsDB.insertNewLabel(req.body.newlabel);
            methodsDB.getLabels(res);
        });

        // Get tasks List
        app.post('/tasksList', function(req, res) {
            methodsDB.getTasks(res);
        });

        // Get projects List
        app.post('/projectsList', function(req, res) {
            // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
            methodsDB.getProjects(res);
        });

        // Get labels List
        app.post('/labelsList', function(req, res) {
            methodsDB.getLabels(res);
        });

        // When task checkbox active
        app.post('/task-checkbox-active', jsonParser, function(req, res) {
            if (!req.body) return res.sendStatus(400);
            console.log(req.body);
            methodsDB.updateTaskIsCompleted(req.body);
            methodsDB.getTasks(res);
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

        // Change Project
        app.post('/change-project', jsonParser, function(req, res) {
            if (!req.body) return res.sendStatus(400);
            console.log(req.body);
            methodsDB.changeProject(req.body);
        });

        // Change Label
        app.post('/change-label', jsonParser, function(req, res) {
            if (!req.body) return res.sendStatus(400);
            console.log(req.body);
            methodsDB.changeLabel(req.body);
        });

        // Change Task
        app.post('/change-task', jsonParser, function(req, res) {
            if (!req.body) return res.sendStatus(400);
            console.log(req.body);
            methodsDB.changeTask(req.body);
        });
    }
};