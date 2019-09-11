const router = require("express").Router();
const verify = require("./verifyToken");
const methodsDB = require("./methodsDB");

router.get("/test", verify, (req, res) => {
  res.send(req.user);
});

// When sent form newTask:
router.post("/sendtask", (req, res) => {
  if (!req.body) return res.sendStatus(400);
  methodsDB.insertNewTask(req.body);
  res.sendStatus(200);
});

// When sent form newProject:
router.post("/sendproject", (req, res) => {
  if (!req.body) return res.sendStatus(400);
  methodsDB.insertNewProject(req.body.newproject);
  res.sendStatus(200);
});

// When sent form newLabel:
router.post("/sendlabel", (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  methodsDB.insertNewLabel(req.body.newlabel);
  res.sendStatus(200);
});

// Get tasks List
router.post("/tasksList", (req, res) => {
  methodsDB.getTasks(req.body, res);
});

// Get projects List
router.post("/projectsList", verify, (req, res) => {
  // console.log(req.headers);
  methodsDB.getProjects(req, res);
});

// Get labels List
router.post("/labelsList", (req, res) => {
  methodsDB.getLabels(res);
});

// When task checkbox active
router.post("/task-checkbox-active", (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  methodsDB.updateTaskIsCompleted(req.body);
  res.sendStatus(200);
});

// Remove task
router.post("/remove-task", (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  methodsDB.removeTask(req.body);
  res.sendStatus(200);
});

// Remove project
router.post("/remove-project", (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  methodsDB.removeProject(req.body);
  methodsDB.getProjects(res);
});

// Remove label
router.post("/remove-label", (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  methodsDB.removeLabel(req.body);
  methodsDB.getLabels(res);
});

// Change Project
router.post("/change-project", (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  methodsDB.changeProjectName(req.body);
  methodsDB.getProjects(res);
});

// Change Label
router.post("/change-label", (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  methodsDB.changeLabelName(req.body);
  methodsDB.getLabels(res);
});

// Change Task
router.post("/change-task", (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  methodsDB.changeTaskName(req.body);
  res.sendStatus(200);
});

module.exports = router;
