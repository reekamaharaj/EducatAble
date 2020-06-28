//Dependencies
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import session from "express-session";
import { routes } from "./routes";

dotenv.config();

//Express setup
const app = express();
const PORT = process.env.PORT || 3000;

//Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Avoid using default session cookie name, 
app.set("trust proxy", 1);

app.use(session({
    secret: process.env.SECRET,
    resave: true, 
    saveUninitialized: true
}));

//Routes
app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("public"));
}

// Connect to the Mongo DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/educateAble";
mongoose.connect( MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true } );

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});