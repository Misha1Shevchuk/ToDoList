// Import file with configs to DB
const configDB = require('./configDB')
const connection = configDB.connection;

// Insert new task to DB
module.exports.insertNewTask = newTask => {
    connection.connect(err => {
        let post = { task: newTask.newtask, id_project: newTask.id_project };
        let query = connection.query('INSERT INTO task SET ?', post, (err, result) => {});
        console.log(query.sql);
    });
}

// Get tasks from DB
module.exports.getTasks = res => {
    
    connection.query('SELECT * FROM task', (err, rows, fields) => {
        // console.log(rows);
        res.send(rows);
    });
}

// Insert new project to DB
module.exports.insertNewProject = newProject => {
    connection.connect(err => {
        let post = { project: newProject };
        let query = connection.query('INSERT INTO project SET ?', post, (err, result) => {});
        console.log(query.sql);
    });
}

// Get projects from DB
module.exports.getProjects = res => {
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    connection.query('SELECT * FROM project', function(err, rows, fields) {
        // console.log(rows);
        res.send(rows);
    });
}

// Insert new label to DB
module.exports.insertNewLabel = newLabel => {
    connection.connect(err => {
        let post = { label: newLabel };
        let query = connection.query('INSERT INTO label SET ?', post, (err, result) => {});
        console.log(query.sql);
    });
}

// Get labels from DB
module.exports.getLabels = res => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    connection.query('SELECT * FROM label', (err, rows, fields) => {
        // console.log(rows);
        res.send(rows);
    });
}

// Update task status
module.exports.updateTaskIsCompleted = obj => {
    let post = [obj.is_completed, obj.id_task];
    let query = connection.query('UPDATE task SET is_completed = ? WHERE id_task = ?', post, (err, result) => {});
    console.log(query.sql);
}

// Remove task
module.exports.removeTask = obj => {
    let post = [obj.id_task];
    let query = connection.query('DELETE FROM task WHERE id_task = ?', post, (err, result) => {});
    console.log(query.sql);
}

// Remove project
module.exports.removeProject = obj => {
    let post = [obj.id_project];
    let query1 = connection.query('DELETE FROM task WHERE id_project = ?', post, (err, result) => {});
    let query2 = connection.query('DELETE FROM project WHERE id_project = ?', post, (err, result) => {});
    console.log(query1.sql);
    console.log(query2.sql);
}

// Remove label
module.exports.removeLabel = obj => {
    let post = [obj.id_label];
    let query = connection.query('DELETE FROM label WHERE id_label = ?', post, (err, result) => {});
    console.log(query.sql);
}

// Change task name
module.exports.changeTaskName = obj => {
    let post = [obj.task, obj.id_task];
    let query = connection.query('UPDATE task SET task = ? WHERE id_task = ?', post, (err, result) => {});
    console.log(query.sql);
}

// Change project name
module.exports.changeProjectName = obj => {
    let post = [obj.project, obj.id_project];
    let query = connection.query('UPDATE project SET project = ? WHERE id_project = ?', post, (err, result) => {});
    console.log(query.sql);
}

// Change label name
module.exports.changeLabelName = obj => {
    let post = [obj.label, obj.id_label];
    let query = connection.query('UPDATE task SET label = ? WHERE id_label = ?', post, (err, result) => {});
    console.log(query.sql);
}

// Create tables into database
module.exports.createTables = () => {
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
        connection.query(queryList[i].query, (err, result) => {});
    }
}