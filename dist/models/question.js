"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var questionSchema = new mongoose_1.Schema({
    //question
    question: { type: String, required: true },
    //question answer
    answer: { type: String, required: true },
    //user that submitted question
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
    //admin that answered question
    answeredBy: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" }
});
var Question = mongoose_1.default.model("Question", questionSchema);
exports.default = Question;
//# sourceMappingURL=question.js.map