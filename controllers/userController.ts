import db from "../models";
import { Response, Request } from "express";
import * as jwt from "jsonwebtoken";

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
                        const token = jwt.sign(email, "secretthing");
                        const admin = found.admin.toString();
                        let user = ({token:token,email:email,admin:admin});
                        res.send(user);
                    } else {
                        res.status(401).send("Password was wrong");
                        console.log("invalid password");
                    }
                } else {
                    res.status(401).send("Account does not exist for this email, register or try another email");
                    console.log("Account does not exist for this email, register or try another email");
                }
            } catch(err) {
                res.status(500).send(err);
                console.log(err);
            }
        })
    },

    //for creating a new user; post controller for register
    createUser: async (req: Request, res: Response) => {
        try {
            const email = req.body.email;
            //checks to see if the email is already in the db
            const user = await db.User.findOne({email})
    
            if (user) {
                console.log("Email associated with an account already.");
                res.status(418).send("Email has account");
            } else {
                try {
                    await db.User.create(req.body);
                    const token = jwt.sign(email, "secretthing");
                    res.send(token);
                    console.log("Registered, and logged in");
                    
                } catch (createFailed) {
                    console.log("Something didn't work");
                    res.status(500).send("something broke");
                }
            }
        } catch (err) {
            res.status(500).send(err)
            console.log("Something really didn't work");
        }
    }
};