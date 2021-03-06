const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';
const dbName = 'myproject';

test('should insert sth and doesnt yell...', () => {

  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    const db = client.db(dbName);

    // Insert a single document
    db.collection('users').insertOne({ a: 1 }, function (err, r) {
      assert.equal(null, err)
      assert.equal(1, r.insertedCount);

      // Insert multiple documents
      db.collection('users').insertMany([{ name: "testName" }, { "town": "testTown" }], function (err, r) {
        assert.equal(null, err);
        assert.equal(2, r.insertedCount);

        client.close();
      });
    });
  });

});