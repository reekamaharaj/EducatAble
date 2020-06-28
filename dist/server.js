"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Dependencies
var dotenv_1 = require("dotenv");
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var express_session_1 = require("express-session");
var routes_1 = require("./routes");
dotenv_1.default.config();
//Express setup
var app = express_1.default();
var PORT = process.env.PORT || 3000;
//Define middleware here
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
//Avoid using default session cookie name, 
app.set("trust proxy", 1);
app.use(express_session_1.default({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true
}));
//Routes
app.use(routes_1.routes);
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express_1.default.static("public"));
}
// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/educateAble";
mongoose_1.default.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// Start the API server
app.listen(PORT, function () {
    console.log("\uD83C\uDF0E  ==> API Server now listening on PORT " + PORT + "!");
});
//# sourceMappingURL=server.js.map