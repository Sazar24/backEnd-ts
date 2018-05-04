const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ObjectID = require('mongodb').ObjectID;

const url = 'mongodb://localhost:27017'; // TODO: to env
const dbName = 'myproject';

class mongoCRUDserviceClass {

    postOneRecord(object) {
        MongoClient.connect(url, function (err, client) {
            assert.equal(null, err);

            const db = client.db(dbName);

            db.collection('users').insertOne(object, function (err, r) {
                assert.equal(null, err);
                assert.equal(1, r.insertedCount);
            });
        });
    };

    async deleteById(id) {
        if (id === undefined || typeof (id) === 'undefined') {
            console.log("id === undefined");
            return false;
        }

        console.log("attempt to remove record with id: " + id);
        try {
            MongoClient.connect(url, function (err, client) {
                assert.equal(null, err);

                const db = client.db(dbName);
                const col = db.collection('users');
                col.deleteOne({ _id: ObjectID(id) }, function (err, r) {
                    assert.equal(null, err);
                });
            });
            console.log("attempt to remove record with id: " + id + " <-- success");
            return true;
        } catch (err) {
            console.log("mongoCRUD.deletByID(id) error! ", err);
            // throw err;
        }
    };
}

const mongoCrudService = new mongoCRUDserviceClass();
export default mongoCrudService;