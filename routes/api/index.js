const router = require("express").Router();
const questionRoutes = require("./question");
const userRoutes = require("./user");
const registerRoutes = require("./register");
// Question routes
router.use("/question", questionRoutes);


router.use("/login", userRoutes);
router.use("/register", userRoutes);
module.exports = router;
