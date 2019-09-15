const router = require("express").Router();
const verify = require("../controllers/verifyToken");
const ts = require("../controllers/tasks");

router.get("/:idProject", verify, ts.getTasksList);
router.post("/", verify, ts.newTask);
router.post("/check/:id_task&:is_completed", ts.toogleActive);
router.delete("/:id_task", verify, ts.removeTask);
router.post("/change-task", verify, ts.updateTask);

module.exports = router;
