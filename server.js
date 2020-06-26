//Dependencies
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");

const MongoStore = require("connect-mongo")(session);

const routes = require("./routes");
const { collection } = require("./models/user");

//Express setup
const app = express();
const PORT = process.env.PORT || 3000;

//Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("trust proxy", 1);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("public"));
}

//sessions setup
const sessionStore = new MongoStore({ mongooseConnection: collection, collection: "sessions"});

app.use(session({
    secret: process.env.SECRET,
    resave: false, 
    saveUninitialized: true,
    store: sessionStore
}));

//Routes
app.use(routes);

// Connect to the Mongo DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/educateAble";
mongoose.connect( MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true } );

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});