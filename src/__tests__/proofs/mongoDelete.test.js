const assert = require('assert');
const mongo = require('mongodb').MongoClient;
const dbName = 'myproject';
const url = 'mongodb://localhost:27017/';
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

test('proof: mongo.deleteOne - testing mechanism... ', () => {

    try {
        MongoClient.connect(url, function (err, client) {
            assert.equal(null, err);

            const db = client.db(dbName);
            const col = db.collection('users');
            col.deleteOne({ "_id": ObjectID("5ae9c1be1787fa1cf6fcdf46") }, function (err, r) {
                assert.equal(null, err);
                assert.equal(1, r.deletedCount);
                client.close();
            });
           
            // // col.findOne({ _id: "5ae96bb52f2a6e5fc3efa183"} , function (err, item) {
            // col.findOne({ _id: ObjectID("") }, function (err, item) {
            //     test.equal(null, err);
            //     console.log("item found: ", item);

            //     db.close();
            // });

        });
    } catch (err) {
        throw err;
    }



});

test('proof2: findAndDelete should delete item by id or throw err if no such id is found', () => {

    try {
        MongoClient.connect(url, function (err, client) {
            assert.equal(null, err);

            const db = client.db(dbName);
            const col = db.collection('users');
            col.findOneAndDelete({ "_id": ObjectID("5ae9b994939d75150828c533") }, function (err, r) {
                assert.equal(null, err);
                assert.equal(1, r.deletedCount);
                client.close();
            });
           
            // // col.findOne({ _id: "5ae96bb52f2a6e5fc3efa183"} , function (err, item) {
            // col.findOne({ _id: ObjectID("") }, function (err, item) {
            //     test.equal(null, err);
            //     console.log("item found: ", item);

            //     db.close();
            // });

        });
    } catch (err) {
        throw err;
        console.log(err);
        
    }



});