const { dbConnection } = require("../configDB");

const getProjectsList = (req, res) => {
  dbConnection.query(
    "SELECT * FROM project WHERE id_user = ?",
    req.user._id,
    (err, rows, fields) => {
      res.send(rows);
    }
  );
};

const newProject = (req, res) => {
  if (!req.body) return res.sendStatus(400);
  dbConnection.connect(err => {
    const post = { project: req.body.newproject, id_user: req.user._id };
    const query = dbConnection.query(
      "INSERT INTO project SET ?",
      post,
      (err, result) => {}
    );
    console.log(query.sql);
  });
  res.sendStatus(200);
};

const removeProject = (req, res) => {
  const query1 = dbConnection.query(
    "DELETE FROM task WHERE id_project = ?",
    req.params.id,
    (err, result) => {}
  );
  const query2 = dbConnection.query(
    "DELETE FROM project WHERE id_project = ?",
    req.params.id,
    (err, result) => {}
  );
  console.log(query1.sql);
  console.log(query2.sql);
  res.sendStatus(200);
};

const updateProject = (req, res) => {
  const post = [req.body.project, req.body.id_project];
  const query = dbConnection.query(
    "UPDATE project SET project = ? WHERE id_project = ?",
    post,
    (err, result) => {}
  );
  console.log(query.sql);
  res.sendStatus(200);
};

module.exports = { getProjectsList, newProject, removeProject, updateProject };
