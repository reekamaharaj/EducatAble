import { model, Schema, Document, Types } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Question } from './question';

export interface User extends Document {
    email: string;
    password: string;
    admin: boolean;
    savedQ: [{ type: Types.ObjectId, ref: Question }];
    isValidPassword: (password: string) => Promise<boolean>;
}

const userSchema = new Schema({
    // email
    email: { type: String, required: true },
    // password
    password: { type: String, required: true },
    // false unless changed on the backend to set an admin
    admin: { type: Boolean, default: false },
    // user's saved questions
    savedQ: [{ type: Schema.Types.ObjectId, ref: 'Question' }]
});

//generate hash for password, will happen on register
userSchema.pre<User>('save', async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});

//compare password submitted to db password, will happen on login
userSchema.methods.isValidPassword = async function (password: string) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
    return compare;
};

const User = model<User>('User', userSchema);

export default User;
