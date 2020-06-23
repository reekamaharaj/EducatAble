const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    //username -> will need to make sure there aren't duplicates
    userName: { type: String, required: true },
    //password -> will be encrypted
    password: { type: String, required: true },
    //this will be false unless changed on the backend to set an admin
    admin: { type: Boolean, default: false },

    isLogged: {type: Boolean, default: false}
});

const User = mongoose.model("User", userSchema);

module.exports = User;
