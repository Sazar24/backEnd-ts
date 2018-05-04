const express = require('express');
const getDataRouter = express.Router();
const mongo = require('mongodb').MongoClient;
// var objectId = require('mongodb').ObjectID;
const assert = require('assert');

const url = 'mongodb://localhost:27017/';
const dbName = 'myproject';


getDataRouter.get('/', function (req, res, next) {
    let outputsArray: any = [];
    console.log("/api/users/getall/ hit!");

    mongo.connect(url, function (err, client) {
        assert.equal(null, err);   
        console.log("in getDataRouter: connect to mongo success");

        const db = client.db(dbName);
        const cursor = db.collection('users').find();   

        cursor.forEach(function (doc, err) {   
            assert.equal(null, err);  
            outputsArray.push(doc);  
        }, function () {
            client.close();   
            res.status(200).send(JSON.stringify(outputsArray));
        });
    });
});
export default getDataRouter;