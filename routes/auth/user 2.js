const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/auth/register"
router.route("/register").post(userController.createUser);
router.route("/login").post(userController.findUser);
router.route("/logout").post(userController.logOut);
router.route("/login").get(userController.loginPage);

module.exports = router;