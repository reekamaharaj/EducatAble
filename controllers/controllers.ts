import db from '../models';
import { Response, Request } from 'express';

// Defining methods for the questions
export default {
    // get all saved questions and displays on FAQ
    findAll: async (req: Request, res: Response) => {
        try {
            const questionModel = await db.Question.find(req.body);
            if (questionModel) {
                res.json(questionModel);
            } else {
                res.status(500).send("No questions in DB");
            }
        } catch (err) {
            res.status(500).send("Error");
        }
    },

    // send user question to db for admin review
    create: async (req: Request, res: Response) => {
        try {
            await db.NewQuestion.create(req.body);
            res.send('Question submitted!');
        } catch (err) {
            res.status(500).send("Error");
        }
    },

    // checks user's save favs to set fav btn status
    saveQCheck: async (req: Request, res: Response) => {
        try {
            const userModel = await db.User.find({
                email: req.user
            }).exec();
            if (userModel[0].savedQ) {
                res.json(userModel[0].savedQ);
            } else {
                res.status(500).send("Nothing saved.");
            }
        } catch (err) {}
    },

    // save question to user's favs
    save: async (req: Request, res: Response) => {
        try {
            const userModel = await db.User.findOneAndUpdate(
                { email: req.user },
                { $addToSet: { savedQ: req.body.id } }
            );
            if (userModel) {
                res.json(userModel);
            } else {
                res.status(500).send("Couldn't save.");
            }
        } catch (err) {
            res.status(500).send("Error");
        }
    },

    // deletes question from user's favs
    unsave: async (req: Request, res: Response) => {
        try {
            const userModel = await db.User.findOneAndUpdate(
                { email: req.user },
                { $pull: { savedQ: req.body.id } }
            );
            if (userModel) {
                res.json(userModel);
            } else {
                res.status(500).send("Couldn't find that saved.");
            }
        } catch (err) {
            res.status(500).send("Error");
        }
    },

    // gets all user's saved questions and displays on Fav page
    findAllSaved: async (req: Request, res: Response) => {
        try {
            const userModel = await db.User.find({
                email: req.user
            }).exec();
            if (userModel[0].savedQ) {
                const questionModel = await db.Question.find({
                    _id: userModel[0].savedQ
                });
                res.json(questionModel);
            } else {
                res.status(500).send("Nothing Saved");
            }
        } catch (err) {
            res.status(500).send("Error");
        }
    },

    // gets all new questions and displays for adming review
    findNew: async (req: Request, res: Response) => {
        try {
            const dbModel = await db.NewQuestion.find(req.body);
            if (dbModel) {
                res.json(dbModel);
            } else {
                res.status(500).send("Nothing found");
            }
        } catch (err) {
            res.status(500).send("Error");
        }
    }
};
