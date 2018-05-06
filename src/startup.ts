import * as dotenv from 'dotenv';
dotenv.config(); // Loads variables from '.env' file to process.env
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Db } from 'mongodb';
import usersRouter from './routes/users';
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
const jsonParser = bodyParser.json();

app.all('/*', function (req, res, next)
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE");
    next();
});

app.use("/api/users/", usersRouter);

app.get('/', (req, res) => {
    res.send('Welcome.   \n');
    console.log("GET / hit!");
});

app.listen(3000,
    () => console.log("server started at port :3000 ")
);