import * as express from 'express';
import mongoCrudService from '../services/mongoCRUD';
// const getDataRouter = express.Router();
const AsyncRouter = require("express-async-router").AsyncRouter;
const getDataRouterOldWay = AsyncRouter();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'myproject';

import cloner from '../services/cloner';

getDataRouterOldWay.get('/:token', async (req, res) => {

    let mongoRecords: any = [];
    try {
        const token = req.params.token;

        // const foundInDB :any = await mongoCrudService.readRecords(token);
        // console.log("w routerze: ", foundInDB);
        // res.status(200).send("router.get działa; " + JSON.stringify(foundInDB));

        /////////////////////////
        await MongoClient.connect(url, async function (err, client) {
            assert.equal(null, err);
            console.log("Connected correctly to server - directly in getDataRouter.get");

            const db = client.db(dbName);
            const col = db.collection('users');

            const cursor = col.find();
            // await col.find().each((err, doc) => {
            cursor.forEach((err, doc) => {
                if (doc) {
                    assert.equal(null, err);
                    // Got a document
                    // console.log("doc (inside .find() ): ", doc);

                    // const stableDoc = Object.assign({}, doc);
                    const stableDoc = cloner.deepClone(doc);
                    mongoRecords.push(stableDoc);
                    console.log("mongoRecords w metodzie .find():", JSON.stringify(mongoRecords));  // tu działa
                    // return;
                } else {
                    client.close();
                    return false;
                }
            },
            () => {
                client.close();
                    // console.log("bźdong w forEach`u");
                    // console.log("mongoRecords - ciągle w foreach`u: ", mongoRecords);
                    console.log("MongoRecords chwile przed wysłaniem: " + JSON.stringify(mongoRecords));    // a tutaj obiekt jest 'undefined' :/ Błędne wywołanie asynchroniczności?
                    res.status(200).send("router.get działa; " + JSON.stringify(mongoRecords));
                    // res.status(200).send("router.get działa++; " + mongoRecords + " | " + JSON.stringify(mongoRecords));
                });
        });
        // /////////////////////////
    }
    catch (ex) {
        res.sendStatus(500);
        throw ex;
    }

    // console.log("MongoRecords chwile przed wysłaniem: " + JSON.stringify(mongoRecords));    // a tutaj obiekt jest 'undefined' :/ Błędne wywołanie asynchroniczności?
    // res.status(200).send("router.get działa; " + JSON.stringify(mongoRecords));
});

export default getDataRouterOldWay;