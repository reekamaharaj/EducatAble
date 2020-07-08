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
                console.log("Couldn't find that");
            }
        } catch (err) {
            console.log('Something went wrong');
        }
    },

    // send user question to db for admin review
    create: async (req: Request, res: Response) => {
        try {
            await db.NewQuestion.create(req.body);
            res.send('Question submitted!');
        } catch (err) {
            console.log(err);
            res.status(500).send("This didn't work");
        }
    },

    // checks user's save favs to set fav btn status
    saveQCheck: async (req: Request, res: Response) => {
        try {
            const userModel = await db.User.find({
                email: req.body.email
            }).exec();
            if (userModel[0].savedQ) {
                const questionModel = await db.Question.find({
                    _id: userModel[0].savedQ
                });
                res.json(questionModel);
            } else {}
        } catch(err){}
    },

    // save question to user's favs
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

    // deletes question from user's favs
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

    // gets all user's saved questions and displays on Fav page
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
    },

    // gets all new questions and displays for adming review
    findNew: async (req: Request, res: Response)=> {
    }
};
