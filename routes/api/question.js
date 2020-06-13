const router = require("express").Router();
const controller = require("../../controllers/controller");

// Matches with "/api/question"
router.route("/").get(controller.findAll).post(controller.create);

// Matches with "/api/question/:id"
router
    .route("/:id")
    // .get(controller.findById)
    .put(controller.update)
    .delete(controller.remove);

module.exports = router;
