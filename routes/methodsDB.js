// Import file with configs to DB
const { dbConnection } = require("../configDB");

// Insert new task to DB
module.exports.insertNewTask = newTask => {
  dbConnection.connect(err => {
    const post = { task: newTask.newtask, id_project: newTask.id_project };
    const query = dbConnection.query(
      "INSERT INTO task SET ?",
      post,
      (err, result) => {}
    );
    console.log(query.sql);
  });
};

// Get tasks from DB
module.exports.getTasks = (obj, res) => {
  const id_project = obj.id_project;
  const query = dbConnection.query(
    "SELECT * FROM task WHERE id_project = ?",
    id_project,
    (err, rows, fields) => {
      // console.log(rows);
      res.send(rows);
    }
  );
  console.log(query.sql);
};

// Insert new project to DB
module.exports.insertNewProject = newProject => {
  dbConnection.connect(err => {
    const post = { project: newProject };
    const query = dbConnection.query(
      "INSERT INTO project SET ?",
      post,
      (err, result) => {}
    );
    console.log(query.sql);
  });
};

// Get projects from DB
module.exports.getProjects = (req, res) => {
  dbConnection.query(
    "SELECT * FROM project WHERE id_user = ?",
    req.user._id,
    (err, rows, fields) => {
      // console.log(rows);
      res.send(rows);
    }
  );
};

// Insert new label to DB
module.exports.insertNewLabel = newLabel => {
  dbConnection.connect(err => {
    const post = { label: newLabel };
    const query = dbConnection.query(
      "INSERT INTO label SET ?",
      post,
      (err, result) => {}
    );
    console.log(query.sql);
  });
};

// Get labels from DB
module.exports.getLabels = res => {
  dbConnection.query("SELECT * FROM label", (err, rows, fields) => {
    // console.log(rows);
    res.send(rows);
  });
};

// Update task status
module.exports.updateTaskIsCompleted = obj => {
  const post = [obj.is_completed, obj.id_task];
  const query = dbConnection.query(
    "UPDATE task SET is_completed = ? WHERE id_task = ?",
    post,
    (err, result) => {}
  );
  console.log(query.sql);
};

// Remove task
module.exports.removeTask = obj => {
  const post = [obj.id_task];
  const query = dbConnection.query(
    "DELETE FROM task WHERE id_task = ?",
    post,
    (err, result) => {}
  );
  console.log(query.sql);
};

// Remove project
module.exports.removeProject = obj => {
  const post = [obj.id_project];
  const query1 = dbConnection.query(
    "DELETE FROM task WHERE id_project = ?",
    post,
    (err, result) => {}
  );
  const query2 = dbConnection.query(
    "DELETE FROM project WHERE id_project = ?",
    post,
    (err, result) => {}
  );
  console.log(query1.sql);
  console.log(query2.sql);
};

// Remove label
module.exports.removeLabel = obj => {
  const post = [obj.id_label];
  const query = dbConnection.query(
    "DELETE FROM label WHERE id_label = ?",
    post,
    (err, result) => {}
  );
  console.log(query.sql);
};

// Change task name
module.exports.changeTaskName = obj => {
  const post = [obj.task, obj.id_task];
  const query = dbConnection.query(
    "UPDATE task SET task = ? WHERE id_task = ?",
    post,
    (err, result) => {}
  );
  console.log(query.sql);
};

// Change project name
module.exports.changeProjectName = obj => {
  const post = [obj.project, obj.id_project];
  const query = dbConnection.query(
    "UPDATE project SET project = ? WHERE id_project = ?",
    post,
    (err, result) => {}
  );
  console.log(query.sql);
};

// Change label name
module.exports.changeLabelName = obj => {
  const post = [obj.label, obj.id_label];
  const query = dbConnection.query(
    "UPDATE label SET label = ? WHERE id_label = ?",
    post,
    (err, result) => {}
  );
  console.log(query.sql);
};
