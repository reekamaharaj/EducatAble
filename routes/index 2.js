const path = require("path");
const router = require("express").Router();
const questionRoutes = require("./api/question");
const userRoutes = require("./auth/user");

// API Routes
router.use("/api", questionRoutes);
router.use("/auth", userRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;