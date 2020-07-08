import { model, Schema, Document, Types } from 'mongoose';
import { User } from './user';

export interface NewQ extends Document {
    newQ: string;
    user: { type: Types.ObjectId };
    answerBy: { type: Types.ObjectId, ref: User };
}

const newquestionSchema = new Schema({
    // new question
    newQ: { type: String, required: true },
    // user that submitted question
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    // admin that answered question
    answeredBy: { type: Schema.Types.ObjectId, ref: 'User' }
});

const NewQuestion = model<NewQ>('NewQuestion', newquestionSchema);

export default NewQuestion;

// Submitted questions do not send the user info yet
