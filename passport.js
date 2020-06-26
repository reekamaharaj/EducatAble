const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const userModel = require("./models/user");

//Passport middleware to handle registration
passport.use(
    "register",
    new localStrategy(
        {
            emailField: "email",
            passwordField: "password",
        },
        async (email, password, done) => {
            try {
                const user = await userModel.create({ email, password });
                return done(null, user);
            } catch (error) {
                done(error);
            }
        }
    )
);

//Passport middleware to handle login
passport.use(
    "login",
    new localStrategy(
        {
            emailField: "email",
            passwordField: "password",
        },
        async (email, password, done) => {
            try {
                const user = await userModel.findOne({ email });
                if (!user) {
                    return done(null, false, { message: "User not found" });
                }
                const validate = await user.isValidPassword(password);
                if (!validate) {
                    return done(null, false, { message: "Wrong password" });
                }
                return done(null, user, { message: "Logged in Successfully" });
            } catch (error) {
                return done(error);
            }
        }
    )
);
