"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var newquestionSchema = new mongoose_1.Schema({
    //question
    question: { type: String, required: true },
    //question answer
    answer: { type: String, required: true },
    //user that submitted question
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
    //admin that answered question
    answeredBy: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" }
});
var NewQuestion = mongoose_1.default.model("NewQuestion", newquestionSchema);
exports.default = NewQuestion;
//# sourceMappingURL=newquestion.js.map