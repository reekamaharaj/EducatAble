import db from '../models';
import { Response, Request } from 'express';

// Defining methods for the questions
export default {
    //to find all saved questions
    findAll: async (req: Request, res: Response) => {
        try {
            const dbModel = await db.Question.find(req.body);
            if (dbModel) {
                res.json(dbModel);
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

    // saves the user's question
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

    unsave: async (req: Request, res: Response) => {
        try {
            const userModel = await db.User.findOne({ email: req.body.email });
            if (userModel) {
                userModel.remove();
                res.json(userModel);
            } else {
                console.log("Couldn't find that");
            }
        } catch (err) {
            console.log('Something went wrong');
        }
    },
    //to find all user saved questions
    //Need to look in the User db for the logged in user's saved Q ids and get those and post to page
    findAllSaved: async (req: Request, res: Response) => {
        try {
            const dbModel = await db.User.find({
                email: req.body.email
            }).populate('Question');
            if (dbModel) {
                res.json(dbModel);
            } else {
                console.log("Couldn't find that");
            }
        } catch (err) {
            console.log('Something went wrong');
        }
    }
};
