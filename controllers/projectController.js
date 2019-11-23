'use strict';

const Project = require('../models/Project');
const Task = require('../models/Task');

module.exports = {
    async getProjectsList(req, res) {
        let projects = await Project.find({user: req.user._id});
        projects.length ? res.send(projects) : res.send(400);
    },

    async newProject(req, res) {
        if (!req.body) return res.sendStatus(400);
        const project = new Project({
            name: req.body.newproject,
            user: req.user._id,
        });
        await project.save();
        res.status(200);
        return res.send(project);
    },

    async removeProject(req, res) {
        if (!req.body) return res.sendStatus(400);
        await Task.deleteMany({project: req.params.id});
        await Project.deleteOne({_id: req.params.id});
        res.sendStatus(200);
    },

    async updateProject(req, res) {
        if (!req.body) return res.sendStatus(400);
        let project = await Project.findOneAndUpdate({_id: req.body.id_project},
            {$set: {name: req.body.project}}, {new: true}
        );
        res.status(200);
        return res.send(project);
    }
};
