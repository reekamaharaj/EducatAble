"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var userController_1 = require("../../controllers/userController");
exports.router = express_1.Router();
// Matches with "/auth/register"
exports.router.route("/register").post(userController_1.default.createUser);
exports.router.route("/login").post(userController_1.default.findUser);
exports.router.route("/logout").post(userController_1.default.logOut);
exports.router.route("/login").get(userController_1.default.loginPage);
//# sourceMappingURL=user.js.map