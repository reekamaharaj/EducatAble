import db from "../models";

// Defining methods for the booksController
export default {
    //to find all saved questions
    findAll: function (req, res) {
        db.Question.find(req.query)
            .sort({ date: -1 })
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    //for saving a specific question, favorites, or admin to look at later?
    findById: function (req, res) {
        db.Question.findById(req.params.id)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },

    //to create a new questions -> user and admin
    create: function (req, res) {
        db.Question.create(req.body)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },

    //to update an existing question -> Admin only
    update: function (req, res) {
        db.Question.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },

    //to remove an existing question -> Admin only
    remove: async function (req, res) {
        try {
            const dbModel = await db.Question.findById({ _id: req.params.id });

            if(dbModel) {
                dbModel.remove();
                res.json(dbModel);
            }
            else {
                res.status(422);
            }
        } catch(err){
            res.status(422).json(err);
        }
        
    }
};
