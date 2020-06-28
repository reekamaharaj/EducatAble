"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var controllers_1 = require("../../controllers/controllers");
exports.router = express_1.Router();
// Matches with "/api/question"
exports.router.route("/").get(controllers_1.default.findAll).post(controllers_1.default.create);
// Matches with "/api/question/:id"
exports.router
    .route("/:id")
    .get(controllers_1.default.findById)
    .put(controllers_1.default.update)
    .delete(controllers_1.default.remove);
//# sourceMappingURL=question.js.map