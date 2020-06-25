const router = require("express").Router();
const controllers = require("../../controllers/controllers");

// Matches with "/api/question"
router.route("/").get(controllers.findAll).post(controllers.create);

// Matches with "/api/question/:id"
router
    .route("/:id")
    .get(controllers.findById)
    .put(controllers.update)
    .delete(controllers.remove);

module.exports = router;
