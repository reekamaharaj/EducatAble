const db = require("../models");

module.exports = {
    //find a user on login
    findUser: (req,res,next)=>{
        const email = req.body.email;
        const password = req.body.password;
        //checks to see if email has been registered
        db.User.findOne({email: email}, function(err, found){
            if(err){
                console.log(err);
            }
            if(found){

                console.log("Logged in with email: " + email);
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

//Anytime someone logs in or tries to register, it'll run the find method first. If valid, it'll post to mongodb and return userName, (possibly email), hashed password, and a token to client
                /* Things to do/have done
                [x] Check if email exists
                [ ] Check if password if valid
                [ ] If password if valid then Session will start for that user
                [ ] Alert user if they logged in
                [ ] Alert user if the email or password was invalid
                */
                //bcrypt compare req.body.password to user password...

                /* Things to do/have done
                [x] Check if email exists
                [ ] If email exists, alert user
                [ ] If email does not exist, register user
                    sessiono for user would start, alert user that they are registered and logged in
                [ ] Validation for email and password
                */
                //if the email has been registered this will console.log... **should alert the user so they know to either login or register a new email**