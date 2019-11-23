const router = require("express").Router();
const verify = require("../services/verifyToken");
const taskController = require("../controllers/taskController");

router.get("/:idProject", verify, taskController.getTasksList);
router.post("/", verify, taskController.newTask);
router.post("/check", taskController.toggleActive);
router.delete("/:id_task", verify, taskController.removeTask);
router.post("/change-task", verify, taskController.updateTask);

module.exports = router;
