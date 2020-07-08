import db from '../models';
import { Response, Request } from 'express';

// Defining methods for the questions
export default {
    //to find all saved questions
    findAll: async (req: Request, res: Response) => {
        try {
            const questionModel = await db.Question.find(req.body);
            if (questionModel) {
                res.json(questionModel);
            } else {
                console.log("Couldn't find that");
            }
        } catch (err) {
            console.log('Something went wrong');
        }
    },

    //to create a new questions -> user and admin
    create: async (req: Request, res: Response) => {
        try {
            await db.NewQuestion.create(req.body);
            res.send('Question submitted!');
        } catch (err) {
            console.log(err);
            res.status(500).send("This didn't work");
        }
    },

    // saves the question to user's favs
    save: async (req: Request, res: Response) => {
        try {
            const userModel = await db.User.findOneAndUpdate(
                { email: req.body.email },
                { $push: { savedQ: req.body.id } }
            );
            if (userModel) {
                res.json(userModel);
            } else {
                console.log("Couldn't find that");
            }
        } catch (err) {
            console.log(err);
            res.status(500).send("That didn't work!");
        }
    },

    // deletes the quetsion from user's favs
    unsave: async (req: Request, res: Response) => {
        try {
            const userModel = await db.User.findOneAndUpdate(
                { email: req.body.email },
                { $pull: { savedQ: req.body.id } }
            );
            if (userModel) {
                console.log("this did something...");
                res.json(userModel);
            } else {
                console.log("Couldn't find that");
            }
        } catch (err) {
            console.log('Something went wrong');
        }
    },

    //to find all user saved questions
    findAllSaved: async (req: Request, res: Response) => {
        try {
            const userModel = await db.User.find({
                email: req.body.email
            }).exec();
            if (userModel[0].savedQ) {
                const questionModel = await db.Question.find({
                    _id: userModel[0].savedQ
                });
                console.log(questionModel);
                res.json(questionModel);
            } else {
                console.log('Nothing saved');
            }
        } catch (err) {
            console.log('catch err for findAllSaved controller');
        }
    }
};
