import db from "../models";
import { Response, Request } from "express";

export default {
    //find a user on login; post controller for login
    findUser: (req: Request,res: Response)=>{
        const email = req.body.email;
        const password = req.body.password;
        //checks to see if email has been registered
        db.User.findOne({email}, async function(error, found){
            try {
                if(error){
                    console.log(error);
                }
                if(found){
                    if (await found.isValidPassword(password)){
                        req.session.email = email;
                        res.send("Logged in with email: " + email);
                        console.log("Logged in with email: " + email);
                    } else {
                        res.send("Password was wrong");
                        console.log("invalid password");
                    }
                } else {
                    res.send("Account does not exist for this email, register or try another email");
                    console.log("Account does not exist for this email, register or try another email");
                }
            } catch(err) {
                res.status(500).send(err);
            }
        }).then(function(){
            res.status(200);
        });
    },

    //for creating a new user; post controller for register
    createUser: function (req: Request,res: Response) {
        let email = req.body.email;
        //checks to see if the email is already in the db
        db.User.findOne({email}, function(err, found){
            if (err) {
                console.log(err);
            }
            if (found){
                res.send("Email already associated with an account");
                console.log("Email already associated with an account");
            } else {
                db.User.create(req.body)
                .then((dbModel) => res.json(dbModel))
                .catch((err) => res.status(422).json(err));
                req.session.email = email;
                res.send("Registered and logged in email: " + email);
                console.log("Registered and logged in email: " + email);
            }
        }).then(function(){
            res.status(200);
        });
    },

    logOut: function (req: Request,res: Response) {
        req.session.destroy();
        res.send("logged out");
    },

    loginPage: function(req, res) {
        if (req.session.email) {
            res.send("You are logged in as: " + req.session.email);
        } else {
            res.render("login")
        }
    }
};