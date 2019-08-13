// Import file with configs to DB
const configDB = require('./configDB')
const connection = configDB.connection;

// Insert new task to DB
module.exports.insertNewTask = function(newTask) {
    connection.connect(function(err) {
        let post = { task: newTask.newtask, id_project: newTask.id_project };
        let query = connection.query('INSERT INTO task SET ?', post, function(err, result) {});
        console.log(query.sql);
    });
}

// Get tasks from DB
module.exports.getTasks = function(res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    connection.query('SELECT * FROM task', function(err, rows, fields) {
        // console.log(rows);
        res.send(rows);
    });
}

// Insert new project to DB
module.exports.insertNewProject = function(newProject) {
    connection.connect(function(err) {
        let post = { project: newProject };
        let query = connection.query('INSERT INTO project SET ?', post, function(err, result) {});
        console.log(query.sql);
    });
}

// Get projects from DB
module.exports.getProjects = function(res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    connection.query('SELECT * FROM project', function(err, rows, fields) {
        // console.log(rows);
        res.send(rows);
    });
}

// Insert new label to DB
module.exports.insertNewLabel = function(newLabel) {
    connection.connect(function(err) {
        let post = { label: newLabel };
        let query = connection.query('INSERT INTO label SET ?', post, function(err, result) {});
        console.log(query.sql);
    });
}

// Get labels from DB
module.exports.getLabels = function(res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    connection.query('SELECT * FROM label', function(err, rows, fields) {
        // console.log(rows);
        res.send(rows);
    });
}

// Update task status
module.exports.updateTaskIsCompleted = function(obj) {
    let post = [obj.is_completed, obj.id_task];
    let query = connection.query('UPDATE task SET is_completed = ? WHERE id_task = ?', post, function(err, result) {});
    console.log(query.sql);
}

// Remove task
module.exports.removeTask = function(obj) {
    let post = [obj.id_task];
    let query = connection.query('DELETE FROM task WHERE id_task = ?', post, function(err, result) {});
    console.log(query.sql);
}

// Remove project
module.exports.removeProject = function(obj) {
    let post = [obj.id_project];
    let query1 = connection.query('DELETE FROM task WHERE id_project = ?', post, function(err, result) {});
    let query2 = connection.query('DELETE FROM project WHERE id_project = ?', post, function(err, result) {});
    console.log(query1.sql);
    console.log(query2.sql);
}

// Remove label
module.exports.removeLabel = function(obj) {
    let post = [obj.id_label];
    let query = connection.query('DELETE FROM label WHERE id_label = ?', post, function(err, result) {});
    console.log(query.sql);
}

module.exports.createTables = function() {
    let queryList = [{ query: 'CREATE TABLE IF NOT EXISTS `label` ( `id_label` int(11) NOT NULL, `label` varchar(50) CHARACTER SET utf8mb4 NOT NULL )' },
        { query: 'CREATE TABLE IF NOT EXISTS `project` ( `id_project` int(11) NOT NULL, `project` varchar(100) CHARACTER SET utf8mb4 NOT NULL )' },
        { query: 'CREATE TABLE IF NOT EXISTS `task` ( `id_task` int(11) NOT NULL, `task` varchar(250) CHARACTER SET utf8mb4 NOT NULL, `id_project` int(11) NOT NULL, `is_completed` tinyint(4) DEFAULT 0 )' },
        { query: 'CREATE TABLE IF NOT EXISTS `task_label` ( `id_task` int(11) NOT NULL, `id_label` int(11) NOT NULL )' },
        { query: 'ALTER TABLE `label` ADD PRIMARY KEY (`id_label`)' },
        { query: 'ALTER TABLE `project` ADD PRIMARY KEY (`id_project`)' },
        { query: 'ALTER TABLE `task` ADD PRIMARY KEY (`id_task`), ADD KEY `task_ibfk_2` (`id_project`)' },
        { query: 'ALTER TABLE `task_label` ADD KEY `task_label_ibfk_1` (`id_task`)' },
        { query: 'ALTER TABLE `label` MODIFY `id_label` int(11) NOT NULL AUTO_INCREMENT' },
        { query: 'ALTER TABLE `project` MODIFY `id_project` int(11) NOT NULL AUTO_INCREMENT' },
        { query: 'ALTER TABLE `task` MODIFY `id_task` int(11) NOT NULL AUTO_INCREMENT' },
        { query: 'ALTER TABLE `task` ADD CONSTRAINT `task_ibfk_1` FOREIGN KEY (`id_project`) REFERENCES `project` (`id_project`), ADD CONSTRAINT `task_ibfk_2` FOREIGN KEY (`id_project`) REFERENCES `project` (`id_project`)' },
        { query: 'ALTER TABLE `task_label` ADD CONSTRAINT `task_label_ibfk_1` FOREIGN KEY (`id_task`) REFERENCES `task` (`id_task`)' },
        { query: "INSERT INTO `project` (`project`) VALUES ('Проект 1')" }
    ]
    for (let i = 0; i < queryList.length; i++) {
        connection.query(queryList[i].query, function(err, result) {});
    }
}