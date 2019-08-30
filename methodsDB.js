// Import file with configs to DB
const configDB = require("./configDB");
const connection = configDB.connection;

// Insert new task to DB
module.exports.insertNewTask = newTask => {
  connection.connect(err => {
    let post = { task: newTask.newtask, id_project: newTask.id_project };
    let query = connection.query(
      "INSERT INTO task SET ?",
      post,
      (err, result) => {}
    );
    console.log(query.sql);
  });
};

// Get tasks from DB
module.exports.getTasks = res => {
  connection.query("SELECT * FROM task", (err, rows, fields) => {
    // console.log(rows);
    res.send(rows);
  });
};

// Insert new project to DB
module.exports.insertNewProject = newProject => {
  connection.connect(err => {
    let post = { project: newProject };
    let query = connection.query(
      "INSERT INTO project SET ?",
      post,
      (err, result) => {}
    );
    console.log(query.sql);
  });
};

// Get projects from DB
module.exports.getProjects = res => {
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  connection.query("SELECT * FROM project", function(err, rows, fields) {
    // console.log(rows);
    res.send(rows);
  });
};

// Insert new label to DB
module.exports.insertNewLabel = newLabel => {
  connection.connect(err => {
    let post = { label: newLabel };
    let query = connection.query(
      "INSERT INTO label SET ?",
      post,
      (err, result) => {}
    );
    console.log(query.sql);
  });
};

// Get labels from DB
module.exports.getLabels = res => {
  connection.query("SELECT * FROM label", (err, rows, fields) => {
    // console.log(rows);
    res.send(rows);
  });
};

// Update task status
module.exports.updateTaskIsCompleted = obj => {
  let post = [obj.is_completed, obj.id_task];
  let query = connection.query(
    "UPDATE task SET is_completed = ? WHERE id_task = ?",
    post,
    (err, result) => {}
  );
  console.log(query.sql);
};

// Remove task
module.exports.removeTask = obj => {
  let post = [obj.id_task];
  let query = connection.query(
    "DELETE FROM task WHERE id_task = ?",
    post,
    (err, result) => {}
  );
  console.log(query.sql);
};

// Remove project
module.exports.removeProject = obj => {
  let post = [obj.id_project];
  let query1 = connection.query(
    "DELETE FROM task WHERE id_project = ?",
    post,
    (err, result) => {}
  );
  let query2 = connection.query(
    "DELETE FROM project WHERE id_project = ?",
    post,
    (err, result) => {}
  );
  console.log(query1.sql);
  console.log(query2.sql);
};

// Remove label
module.exports.removeLabel = obj => {
  let post = [obj.id_label];
  let query = connection.query(
    "DELETE FROM label WHERE id_label = ?",
    post,
    (err, result) => {}
  );
  console.log(query.sql);
};

// Change task name
module.exports.changeTaskName = obj => {
  let post = [obj.task, obj.id_task];
  let query = connection.query(
    "UPDATE task SET task = ? WHERE id_task = ?",
    post,
    (err, result) => {}
  );
  console.log(query.sql);
};

// Change project name
module.exports.changeProjectName = obj => {
  let post = [obj.project, obj.id_project];
  let query = connection.query(
    "UPDATE project SET project = ? WHERE id_project = ?",
    post,
    (err, result) => {}
  );
  console.log(query.sql);
};

// Change label name
module.exports.changeLabelName = obj => {
  let post = [obj.label, obj.id_label];
  let query = connection.query(
    "UPDATE label SET label = ? WHERE id_label = ?",
    post,
    (err, result) => {}
  );
  console.log(query.sql);
};
