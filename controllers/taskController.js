'use strict';

const Task = require('../models/Task');

module.exports = {
    async getTasksList(req, res) {
        const tasks = await Task.find({project: req.params.idProject});
        res.send(tasks)
    },

    async newTask(req, res) {
        if (!req.body) return res.sendStatus(400);
        const task = await new Task({
            name: req.body.newtask,
            project: req.body.id_project,
        });
        await task.save();
        res.status(200);
        return res.json(task);
    },

    async toggleActive(req, res) {
        if (!req.body) return res.sendStatus(400);
        let task = await Task.findOneAndUpdate({_id: req.body.id_task},
            {$set: {completed: req.body.is_completed}}, {new: true}
        );
        res.status(200);
        return res.json(task);
    },

    async removeTask(req, res) {
        if (!req.body) return res.sendStatus(400);
        await Task.deleteOne({_id: req.params.id_task});
        res.sendStatus(200);
    },

    async updateTask(req, res) {
        if (!req.body) return res.sendStatus(400);
        let task = await Task.findOneAndUpdate({_id: req.body.id_task},
            {$set: {name: req.body.task}}, {new: true}
        );
        res.status(200);
        return res.json(task);
    }
};