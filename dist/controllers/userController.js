"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../models");
exports.default = {
    //find a user on login; post controller for login
    findUser: function (req, res) {
        var email = req.body.email;
        var password = req.body.password;
        //checks to see if email has been registered
        models_1.default.User.findOne({ email: email }, function (error, found) {
            return __awaiter(this, void 0, void 0, function () {
                var err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 4, , 5]);
                            if (error) {
                                console.log(error);
                            }
                            if (!found) return [3 /*break*/, 2];
                            return [4 /*yield*/, found.isValidPassword(password)];
                        case 1:
                            if (_a.sent()) {
                                req.session.email = email;
                                res.send("Logged in with email: " + email);
                                console.log("Logged in with email: " + email);
                            }
                            else {
                                res.send("Password was wrong");
                                console.log("invalid password");
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            res.send("Account does not exist for this email, register or try another email");
                            console.log("Account does not exist for this email, register or try another email");
                            _a.label = 3;
                        case 3: return [3 /*break*/, 5];
                        case 4:
                            err_1 = _a.sent();
                            res.status(500).send(err_1);
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        }).then(function () {
            res.status(200);
        });
    },
    //for creating a new user; post controller for register
    createUser: function (req, res) {
        var email = req.body.email;
        //checks to see if the email is already in the db
        models_1.default.User.findOne({ email: email }, function (err, found) {
            if (err) {
                console.log(err);
            }
            if (found) {
                res.send("Email already associated with an account");
                console.log("Email already associated with an account");
            }
            else {
                models_1.default.User.create(req.body)
                    .then(function (dbModel) { return res.json(dbModel); })
                    .catch(function (err) { return res.status(422).json(err); });
                req.session.email = email;
                res.send("Registered and logged in email: " + email);
                console.log("Registered and logged in email: " + email);
            }
        }).then(function () {
            res.status(200);
        });
    },
    logOut: function (req, res) {
        if (req.session) {
            req.session.destroy(function () { });
            res.send("logged out");
        }
        else {
            res.status(200);
        }
    },
    loginPage: function (req, res) {
        if (req.session.email) {
            res.send("You are logged in as: " + req.session.email);
        }
        else {
            res.render("login");
        }
    }
};
//# sourceMappingURL=userController.js.map