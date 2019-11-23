const router = require("express").Router();
const verify = require("../services/verifyToken");
const projectController = require("../controllers/projectController");

router.get("/", verify, projectController.getProjectsList);
router.post("/", verify, projectController.newProject);
router.delete("/:id", verify, projectController.removeProject);
router.post("/change-project", verify, projectController.updateProject);

module.exports = router;
