import * as dotenv from 'dotenv';
import * as express from 'express';
// const bodyParser = require('body-parser')
import * as bodyParser from 'body-parser';
// import getDataRouterOldWay from './routes/getDataOldWay';
import postDataRouter from './routes/post';
// import getDataRouter from './routes/getData';
import getDataRouter from './routes/getData';
import deleteDataRouter from './routes/deleteRecord';
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

app.use("/api/users/post", postDataRouter);
app.use("/api/users/getall", getDataRouter);
app.use("/api/users/delete/", deleteDataRouter);

app.get('/', (req, res) => {
    res.send('This is the begining..  \n');
    console.log("/ get  hit!");
});

app.listen(3000,
    () => console.log("server started at port :3000 ")
);