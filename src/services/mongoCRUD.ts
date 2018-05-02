const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ObjectID = require('mongodb').ObjectID;

const url = 'mongodb://localhost:27017';
const dbName = 'myproject';

class mongoCRUDserviceClass {
    postOneRecord(object) {
        // Use connect method to connect to the Server
        MongoClient.connect(url, function (err, client) {
            assert.equal(null, err);
            console.log("Connected correctly to server");

            const db = client.db(dbName);

            // Insert a single document
            db.collection('users').insertOne(object, function (err, r) {
                assert.equal(null, err);
                assert.equal(1, r.insertedCount);

            });
        });
    };

    async readRecords(filter) {
        let obj: any;

        // Use connect method to connect to the Server
        return MongoClient.connect(url, async (err, client) => {
            assert.equal(null, err);
            console.log("Connected correctly to server -in mongoCrudService.readRecords");

            const db = client.db(dbName);
            const col = db.collection('users');

            col.find({ "number": filter }).limit(1).each(async (err, doc) => {
                if (doc) {
                    assert.equal(null, err);
                    // Got a document
                    // console.log("doc: ", doc);
                    obj = doc;
                    return doc;
                } else {
                    client.close();
                    return { "a": false };
                }
            });
            // return obj;
        });
    };

    async deleteById(id) {
        console.log("attempt to remove record with id: " + id);
        try {
            MongoClient.connect(url, function (err, client) {
                assert.equal(null, err);
                console.log("mongoCRUDservive.deleteByID: Connected correctly to server");

                const db = client.db(dbName);
                const col = db.collection('users');
                col.deleteOne({ _id: ObjectID(id) }, function (err, r) {
                    assert.equal(null, err);
                    assert.equal(1, r.deletedCount);
                    console.log(`item with id=="${id} has been removed"`);
                });
            });
        } catch (err) {
            throw err;
        }
    };
}

const mongoCrudService = new mongoCRUDserviceClass();
export default mongoCrudService;