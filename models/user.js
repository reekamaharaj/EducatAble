const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    //email -> will need to make sure there aren't duplicates
    email: { type: String, required: true },
    //password -> will be encrypted
    password: { type: String, required: true },
    //this will be false unless changed on the backend to set an admin
    admin: { type: Boolean, default: false },
    //changes for if user is logged in
    isLogged: {type: Boolean, default: false}
});

//generate hash
userSchema.pre("save", async function(next){
    const user = this;
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});

//compare password
userSchema.methods.isValidPassword = async function(password) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
    return compare;
}
const User = mongoose.model("User", userSchema);

module.exports = User;
