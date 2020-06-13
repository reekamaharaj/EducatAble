const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    //question
    question: { type: String, required: true },
    //question answer
    answer: { type: String, required: true },
    //user that submitted question
    user: [{ type: Schema.Types.ObjectId, ref: "User"}],
    //admin that answered question
    answeredBy: [{ type: Schema.Types.ObjectId, ref: "User"}]
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
