//Dependencies
import * as dotenv from 'dotenv';

dotenv.config();

import * as express from 'express';
import * as mongoose from 'mongoose';
import { routes } from './routes';

//Express setup
const app = express();
const PORT = process.env.PORT || 3000;

//Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Avoid using default session cookie name
app.set('trust proxy', 1);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('public'));
}

//Routes
app.use(routes);

// Connect to the Mongo DB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/educateAble';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
