import db from "../models";
import { Response, Request } from "express";

// Defining methods for the booksController
export default {
    //to find all saved questions
    findAll: async function (req: Request, res: Response) {
        try {
            const dbModel = await db.Question.find(req.body);
            if (dbModel) {
                res.json(dbModel);
            } else {
                console.log("Couldn't find that");
            }
        } catch (err) {
            console.log("Something went wrong");
        }
    },
    
    //to create a new questions -> user and admin
    create: async function (req: Request, res: Response) {
        try {
            const dbModel = await db.Question.create(req.body);
            if (dbModel) {
                res.json(dbModel);
            } else {
                console.log("Couldn't create that");
            }
        } catch (err) {
            console.log("Something went wrong");
        }
    },

    //for saving a specific question, favorites, or admin to look at later?
    // findById: async function (req: Request, res: Response) {
    //     try {
    //         const dbModel = await db.Question.findById(req.params.id);
    //         if (dbModel) {
    //             res.json(dbModel);
    //         } else {
    //             console.log("Couldn't find that");
    //         }
    //     } catch (err) {
    //         console.log("Something went wrong");
    //     }
    // },
    //to update an existing question -> Admin only
    // update: async function (req: Request, res: Response) {
    //     try {
    //         const dbModel = await db.Question.findOneAndUpdate({ _id: req.params.id }, req.body);
    //         if (dbModel) {
    //             res.json(dbModel);
    //         } else {
    //             console.log("Couldn't update that");
    //         }
    //     } catch (err) {
    //         console.log("Something went wrong");
    //     }
    // },
    //to remove an existing question -> Admin only
    // remove: async function (req: Request, res: Response) {
    //     try {
    //         const dbModel = await db.Question.findById({ _id: req.params.id });

    //         if(dbModel) {
    //             dbModel.remove();
    //             res.json(dbModel);
    //         }
    //         else {
    //             console.log("Couldn't remove that");
    //         }
    //     } catch(err){
    //         console.log("Something went wrong");
    //     }
    // }
};
