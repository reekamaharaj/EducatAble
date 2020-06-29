import { model, Schema, Document } from "mongoose";
import { User } from "./user";

export interface Question extends Document {
    question: string,
    answer: string,
    user: User,
    answerBy: User
}

const questionSchema = new Schema({
    //question
    question: { type: String, required: true },
    //question answer
    answer: { type: String, required: true },
    //user that submitted question
    user: { type: Schema.Types.ObjectId, ref: "User"},
    //admin that answered question
    answeredBy: { type: Schema.Types.ObjectId, ref: "User"}
});

const Question = model<Question>("Question", questionSchema);

export default Question;
