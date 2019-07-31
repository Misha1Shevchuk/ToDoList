// Import file with configs to DB
var configDB = require('./configDB')
var connection = configDB.connection;

// Insert new task to DB
module.exports.insertNewTask = function(newTask) {
    connection.connect(function(err) {
        var post = { task: newTask.newtask, id_project: newTask.id_project };
        var query = connection.query('INSERT INTO task SET ?', post, function(err, result) {});
        console.log(query.sql);
    });
}

// Get tasks from DB
module.exports.getTasks = function(res) {
    connection.query('SELECT * FROM task', function(err, rows, fields) {
        // console.log(rows);
        res.send(rows);
    });
}

// Insert new project to DB
module.exports.insertNewProject = function(newProject) {
    connection.connect(function(err) {
        var post = { project: newProject };
        var query = connection.query('INSERT INTO project SET ?', post, function(err, result) {});
        console.log(query.sql);
    });
}

// Get projects from DB
module.exports.getProjects = function(res) {
    connection.query('SELECT * FROM project', function(err, rows, fields) {
        // console.log(rows);
        res.send(rows);
    });
}

// Insert new label to DB
module.exports.insertNewLabel = function(newLabel) {
    connection.connect(function(err) {
        var post = { label: newLabel };
        var query = connection.query('INSERT INTO label SET ?', post, function(err, result) {});
        console.log(query.sql);
    });
}

// Get labels from DB
module.exports.getLabels = function(res) {
    connection.query('SELECT * FROM label', function(err, rows, fields) {
        // console.log(rows);
        res.send(rows);
    });
}

// Update task status
module.exports.updateTaskIsCompleted = function(obj) {
    var post = [obj.is_completed, obj.id_task];
    var query = connection.query('UPDATE task SET is_completed = ? WHERE id_task = ?', post, function(err, result) {});
    console.log(query.sql);
}

// Remove task
module.exports.removeTask = function(obj) {
    var post = [obj.id_task];
    var query = connection.query('DELETE FROM task WHERE id_task = ?', post, function(err, result) {});
    console.log(query.sql);
}

// Remove project
module.exports.removeProject = function(obj) {
    var post = [obj.id_project];
    var query1 = connection.query('DELETE FROM task WHERE id_project = ?', post, function(err, result) {});
    var query2 = connection.query('DELETE FROM project WHERE id_project = ?', post, function(err, result) {});
    console.log(query.sql);
}

// Remove label
module.exports.removeLabel = function(obj) {
    var post = [obj.id_label];
    var query = connection.query('DELETE FROM label WHERE id_label = ?', post, function(err, result) {});
    console.log(query.sql);
}