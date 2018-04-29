import * as dotenv from 'dotenv';
import * as express from 'express';
// const bodyParser = require('body-parser')
import * as bodyParser from 'body-parser';
// import getDataRouterOldWay from './routes/getDataOldWay';
import postDataRouter from './routes/post';
// import getDataRouter from './routes/getData';
import getData from './routes/getData';
const cors = require('cors');

dotenv.config(); // Loads variables from '.env' file to process.env
const app = express();
app.use(bodyParser.json());
const jsonParser = bodyParser.json();

app.all('/*', function (req, res, next)
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
    res.header("Access-Control-Allow-Methods", "GET,POST");
    next();
});

// app.use(cors());

// app.use("/api/users/get", getDataRouterOldWay);
app.use("/api/users/getall", getData);
app.use("/api/users/post", postDataRouter);

app.get('/', (req, res) => {
    res.send('This is the begining..  \n');

    console.log("/ get  hit!");
});

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

//     next();
// });

app.listen(3000,
    () => console.log("server started at port :3000 ")
);


/////////////////////////

// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
// const url = 'mongodb://localhost:27017';
// const dbName = 'myproject';

/////////////////////

// MongoClient.connect(url, function (err, client) {
//     assert.equal(null, err);
//     console.log("Connected correctly to server");

//     const db = client.db(dbName);

//     // Insert a single document
//     db.collection('inserts').insertOne({ a: 1 }, function (err, r) {
//         assert.equal(null, err);
//         assert.equal(1, r.insertedCount);

//         console.log("inserted item to the Collection!");
//         // Insert multiple documents
//         db.collection('inserts').insertMany([{ a: 2 }, { a: 3 }], function (err, r) {
//             assert.equal(null, err);
//             assert.equal(2, r.insertedCount);

//             client.close();
//         });
//     });
// });


///////////////