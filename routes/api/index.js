const router = require("express").Router();
const questionRoutes = require("./question");

// Question routes
router.use("/question", questionRoutes);

module.exports = router;
