const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/auth/register"
router.route("/register").post(userController.createUser);
router.route("/login").post(userController.findUser);

module.exports = router;