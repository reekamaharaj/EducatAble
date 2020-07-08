import { model, Schema, Document, Types } from 'mongoose';
import { User } from './user';

export interface Question extends Document {
    question: string;
    answer: string;
    user: { type: Types.ObjectId, ref: User };
    answerBy: { type: Types.ObjectId, ref: User };
}

const questionSchema = new Schema({
    // question
    question: { type: String, required: true },
    // answer
    answer: { type: String, required: true },
    // user that submitted question
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    // admin that answered question
    answeredBy: { type: Schema.Types.ObjectId, ref: 'User' }
});

const Question = model<Question>('Question', questionSchema);

export default Question;

// Currently not displaying the user or admin that answered question
