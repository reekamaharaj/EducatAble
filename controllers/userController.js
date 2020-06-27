const db = require("../models");

module.exports = {
    //find a user on login
    findUser: (req,res,next)=>{
        const email = req.body.email;
        const password = req.body.password;
        //checks to see if email has been registered
        db.User.findOne({email: email}, async function(err, found){
            if(err){
                console.log(err);
            }
            if(found){
                if (await found.isValidPassword(password)){
                    console.log("Logged in with email: " + email);
                } else {
                    console.log("invalid password");
                }
                
            } else {
                console.log("Account does not exist for this email, register or try another email");
            }
        });
    },

    //for creating a new user
    createUser: function (req, res) {
        const email = req.body.email;
        //checks to see if the email is already in the db
        db.User.findOne({email: email}, function(err, found){
            if (err) {
                console.log(err);
            }
            if (found){
                console.log("Email already associated with an account");
            } else {
                db.User.create(req.body)
                .then((dbModel) => res.json(dbModel))
                .catch((err) => res.status(422).json(err));
                console.log("Registered and logged in email: " + email);
            }
        });
    }
};