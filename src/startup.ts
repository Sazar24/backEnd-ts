import * as dotenv from 'dotenv';
import * as express from 'express';
// const bodyParser = require('body-parser')
import * as bodyParser from 'body-parser';
import getDataRouter from './routes/getData';
import postDataRouter from './routes/post';

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

dotenv.config(); // Loads variables from '.env' file to process.env
const app = express();
app.use(bodyParser.json());
// const jsonParser = bodyParser.json();

const url = 'mongodb://localhost:27017';
const dbName = 'myproject';

app.use("/api/users/get", getDataRouter);
app.use("/api/users/post", postDataRouter);

app.get('/',  (req, res) => {
    res.send('You are... somewhere.  \n');
    
    console.log("/ get  hit!");
});

// app.all('/*', function (req, res) {
//     // status nie dochodzi :/

//     // res.sendStatus(404).send("entered route path is not supported");
//     res.send("Entered route-path is not supported").sendStatus(404);
// });


app.listen(3000,
    () => console.log("server started at port :3000 ")
);
