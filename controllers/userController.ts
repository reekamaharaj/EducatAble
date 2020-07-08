import db from "../models";
import { Response, Request } from "express";
import * as jwt from "jsonwebtoken";

export default {
    // Allows user to login
    findUser: (req: Request, res: Response)=>{
        const email = req.body.email;
        const password = req.body.password;
        //checks to see if email has been registered
        db.User.findOne({email}, async function(error, found){
            try {
                if(error){}
                if(found){
                    if (await found.isValidPassword(password)){
                        const token = jwt.sign(email, "secretthing");
                        const admin = found.admin.toString();
                        let user = ({token:token,email:email,admin:admin});
                        res.send(user);
                    } else {
                        res.status(401).send("Password was wrong");
                    }
                } else {
                    res.status(401).send("Account does not exist for this email, register or try another email");
                }
            } catch(err) {
                res.status(500).send(err);
            }
        })
    },

    // Allows user to register
    createUser: async (req: Request, res: Response) => {
        try {
            const email = req.body.email;
            //checks to see if the email is already in the db
            const user = await db.User.findOne({email})
    
            if (user) {
                res.status(418).send("Email has account");
            } else {
                try {
                    await db.User.create(req.body);
                    const token = jwt.sign(email, "secretthing");
                    res.send(token);
                } catch (createFailed) {
                    res.status(500).send("something broke");
                }
            }
        } catch (err) {
            res.status(500).send(err)
        }
    }
};