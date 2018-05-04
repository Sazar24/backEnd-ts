import * as dotenv from 'dotenv';
import * as express from 'express';
// const bodyParser = require('body-parser')
import * as bodyParser from 'body-parser';
import postDataRouter from './routes/post';
// import getDataRouter from './routes/getData';
import getDataRouter from './routes/getData';
import deleteDataRouter from './routes/deleteRecord';
import { Db } from 'mongodb';
import usersRouter from './routes/users';
const cors = require('cors');

dotenv.config(); // Loads variables from '.env' file to process.env
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

// app.use(cors());

// TODO: read about MVC pattern
// TODO: url wszędzie jednakowe. (Bez '...post/delete/getall/' w url)

app.use("/api/users/", usersRouter);

app.get('/', (req, res) => {
    res.send('This is the begining..  \n');
    console.log("GET / hit!");
});

app.listen(3000,
    () => console.log("server started at port :3000 ")
);

//////////////////
// usersRouter.ts

// repo = new UsersRepo(process.env.MONGO_URI);

// get('/', (req, res)=>
// {
//     users = repo.getall()
//     res.send(users);
// })