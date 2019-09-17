const { dbConnection } = require("../configDB");

const getTasksList = (req, res) => {
  const query = dbConnection.query(
    "SELECT * FROM task WHERE id_project = ?",
    req.params.idProject,
    (err, rows, fields) => {
      res.send(rows);
    }
  );
  console.log(query.sql);
};

const newTask = (req, res) => {
  console.log(req.body);
  const post = { task: req.body.newtask, id_project: req.body.id_project };
  const query = dbConnection.query(
    "INSERT INTO task SET ?",
    post,
    (err, result) => {}
  );
  console.log(query.sql);
  res.sendStatus(200);
};

const toogleActive = (req, res) => {
  console.log(req.body);
  const post = [req.body.is_completed, req.body.id_task];
  const query = dbConnection.query(
    "UPDATE task SET is_completed = ? WHERE id_task = ?",
    post,
    (err, result) => {}
  );
  console.log(query.sql);
  res.sendStatus(200);
};

const removeTask = (req, res) => {
  const query = dbConnection.query(
    "DELETE FROM task WHERE id_task = ?",
    req.params.id_task,
    (err, result) => {}
  );
  console.log(query.sql);
  res.sendStatus(200);
};

const updateTask = (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  const post = [req.body.task, req.body.id_task];
  const query = dbConnection.query(
    "UPDATE task SET task = ? WHERE id_task = ?",
    post,
    (err, result) => {}
  );
  console.log(query.sql);
  res.sendStatus(200);
};

module.exports = {
  getTasksList,
  newTask,
  toogleActive,
  removeTask,
  updateTask
};
