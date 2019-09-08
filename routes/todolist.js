const router = require("express").Router();
const verify = require("./verifyToken");
const methodsDB = require("./methodsDB");

/* NEED TO ADD CHECH ID_USER INTO PROJECTS */

router.get("/test", verify, (req, res) => {
  res.send(req.user);
});

// When sent form newTask:
router.post("/sendtask", verify, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  methodsDB.insertNewTask(req.body);
  res.sendStatus(200);
});

// When sent form newProject:
router.post("/sendproject", verify, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  methodsDB.insertNewProject(req.body.newproject);
  res.sendStatus(200);
});

// When sent form newLabel:
router.post("/sendlabel", verify, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  methodsDB.insertNewLabel(req.body.newlabel);
  res.sendStatus(200);
});

// Get tasks List
router.post("/tasksList", verify, (req, res) => {
  methodsDB.getTasks(req.body, res);
});

// Get projects List
router.post("/projectsList", verify, (req, res) => {
  methodsDB.getProjects(res);
});

// Get labels List
router.post("/labelsList", verify, (req, res) => {
  methodsDB.getLabels(res);
});

// When task checkbox active
router.post("/task-checkbox-active", verify, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  methodsDB.updateTaskIsCompleted(req.body);
  res.sendStatus(200);
});

// Remove task
router.post("/remove-task", verify, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  methodsDB.removeTask(req.body);
  res.sendStatus(200);
});

// Remove project
router.post("/remove-project", verify, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  methodsDB.removeProject(req.body);
  methodsDB.getProjects(res);
});

// Remove label
router.post("/remove-label", verify, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  methodsDB.removeLabel(req.body);
  methodsDB.getLabels(res);
});

// Change Project
router.post("/change-project", verify, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  methodsDB.changeProjectName(req.body);
  methodsDB.getProjects(res);
});

// Change Label
router.post("/change-label", verify, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  methodsDB.changeLabelName(req.body);
  methodsDB.getLabels(res);
});

// Change Task
router.post("/change-task", verify, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  methodsDB.changeTaskName(req.body);
  res.sendStatus(200);
});

module.exports = router;
