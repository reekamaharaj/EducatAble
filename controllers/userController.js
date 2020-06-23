const db = require("../models");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
const { User } = require("../models");
module.exports = {
    find: (req,res,next)=>{
        const userName = req.body.userName;
        const password = req.body.password;
        // User.findOne({userName:userName})
        
    }
};

//Anytime someone logs in or tries to register, it'll run the find method first. If valid, it'll post to mongodb and return userName, (possibly email), hashed password, and a token to client