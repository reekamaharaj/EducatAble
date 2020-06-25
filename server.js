//Dependencies
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

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
//Routes
app.use(routes);

// Connect to the Mongo DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/educateAble";
mongoose.connect( MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true } );

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});