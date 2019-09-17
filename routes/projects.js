const router = require("express").Router();
const verify = require("../controllers/verifyToken");
const pr = require("../controllers/projects");

router.get("/", verify, pr.getProjectsList);
router.post("/", verify, pr.newProject);
router.delete("/:id", verify, pr.removeProject);
router.post("/change-project", verify, pr.updateProject);

module.exports = router;
