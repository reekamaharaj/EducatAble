import db from '../models'
import { Response, Request } from 'express'

// Defining methods for the questions
export default {
  //to find all saved questions
  findAll: async (req: Request, res: Response) => {
    try {
      const dbModel = await db.Question.find(req.body)
      if (dbModel) {
        res.json(dbModel)
      } else {
        console.log("Couldn't find that")
      }
    } catch (err) {
      console.log('Something went wrong')
    }
  },

  //to create a new questions -> user and admin
  create: async (req: Request, res: Response) => {
    try {
      await db.NewQuestion.create(req.body);
      res.send('Question submitted!')
    } catch (err) {
      console.log(err)
      res.status(500).send("This didn't work")
    }
  },

  //to find all user saved questions
  //Need to look in the User db for the logged in user's saved Q ids and get those and post to page
  findAllSaved: async (req: Request, res: Response) => {
    try {
      const dbModel = await db.User.findOne({ _id: req.body.id })
      .populate("Question")
      if (dbModel) {
        res.json(dbModel)
      } else {
        console.log("Couldn't find that")
      }
    } catch (err) {
      console.log('Something went wrong')
    }
  },

  //add q id to user saved questions
  saveQ: async function (req: Request, res: Response) {
        try {
            const dbModel = await db.User.findOneAndUpdate({ _id: req.body.id }, req.body);
            if (dbModel) {
                res.json(dbModel);
            } else {
                console.log("Couldn't update that");
            }
        } catch (err) {
            console.log("Something went wrong");
        }
    },

    //remove q id from user saved questions
    unsaveQ: async function (req: Request, res: Response) {
          try {
              const dbModel = await db.User.findById({ _id: req.body.id });
    
              if(dbModel) {
                  dbModel.remove();
                  res.json(dbModel);
              }
              else {
                  console.log("Couldn't remove that");
              }
          } catch(err){
              console.log("Something went wrong");
          }
      }
}
