"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var path_1 = require("path");
var express_1 = require("express");
var question_1 = require("./api/question");
var user_1 = require("./auth/user");
exports.routes = express_1.Router();
// API Routes
exports.routes.use("/api", question_1.router);
exports.routes.use("/auth", user_1.router);
// If no API routes are hit, send the React app
exports.routes.use(function (req, res) {
    res.sendFile(path_1.default.join(__dirname, "../public/index.html"));
});
//# sourceMappingURL=index.js.map