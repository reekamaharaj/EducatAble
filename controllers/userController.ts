import db from "../models";
import { Response, Request } from "express";

export default {
    //find a user on login; post controller for login
    findUser: (req: Request, res: Response)=>{
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
                        req.session!.email = email;
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
                res.status(500).send(err)
                console.log(err);
            }
        }).then(function(){
            res.status(200);
        });
    },

    //for creating a new user; post controller for register
    createUser: async (req: Request, res: Response) => {
        try {
            const email = req.body.email;
            //checks to see if the email is already in the db
            const user = await db.User.findOne({email})
    
            if (user) {
                console.log("Email associated with an account already.");
            } else {
                try {
                    await db.User.create(req.body);
                    req.session!.email = email;
                    console.log("Registered, and logged in");
                } catch (createFailed) {
                    console.log("Something didn't work");
                }
            }
        } catch (err) {
            console.log("Something really didn't work");
        }
    },

    logOut: function (req: Request, res: Response) {
        if( req.session ){
            req.session.destroy(function(){});
            res.send("logged out");
        } else {
            res.status(200);
        }
        
    },

    loginPage: function(req: Request, res: Response) {
        if (req.session!.email) {
            res.send("You are logged in as: " + req.session!.email);
        } else {
            res.render("login");
        }
    }
};