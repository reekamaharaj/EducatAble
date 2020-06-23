const router = require("express").Router();
const controller = require("../../controllers/userController");

router.route("/login").post(controller.find);