const router = require("express").Router();
const verify = require("./verifyToken");
const { dbConnection } = require("../configDB");

// Get tasks List
router.get("/:idProject", verify, (req, res) => {
  const query = dbConnection.query(
    "SELECT * FROM task WHERE id_project = ?",
    req.params.idProject,
    (err, rows, fields) => {
      res.send(rows);
    }
  );
  console.log(query.sql);
});

// When sent form newTask:
router.post("/", verify, (req, res) => {
  console.log(req.body);
  const post = { task: req.body.newtask, id_project: req.body.id_project };
  const query = dbConnection.query(
    "INSERT INTO task SET ?",
    post,
    (err, result) => {}
  );
  console.log(query.sql);
  res.sendStatus(200);
});

// When task checkbox active
router.post("/check/:id_task&:is_completed", (req, res) => {
  console.log(req);
  const post = [req.body.is_completed, req.body.id_task];
  const query = dbConnection.query(
    "UPDATE task SET is_completed = ? WHERE id_task = ?",
    post,
    (err, result) => {}
  );
  console.log(query.sql);
  res.sendStatus(200);
});

// Remove task
router.delete("/:id_task", verify, (req, res) => {
  const query = dbConnection.query(
    "DELETE FROM task WHERE id_task = ?",
    req.params.id_task,
    (err, result) => {}
  );
  console.log(query.sql);
  res.sendStatus(200);
});

// Change Task
router.post("/change-task", verify, (req, res) => {
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
});

module.exports = router;
