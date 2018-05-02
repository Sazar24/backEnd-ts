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
        assert.equal(null, err);   // now its know its connected succesfully
        console.log("in getDataRouter: connect to mongo success");

        const db = client.db(dbName);
        // db.collection("users").insertOne({"number":"5","name":"nameTest2", "town":"towntest2"});
        const cursor = db.collection('users').find();   // znajdz wszystkie rekordy w tej kolekcji dla tej bazy z ktora sie polaczyles url`em

        cursor.forEach(function (doc, err) { //  
            assert.equal(null, err);  // sprawdz czy ok; If not - break! 
            outputsArray.push(doc);   // każdy rekord z tej bazy odczytaj i wrzuc do roboczej tablicy
        }, function () {
            client.close();   // juz nie potrzebuje tej bazy. Zamknij ją.
            // console.log("resultArray w foreachu:", outputsArray);
            res.status(200).send(JSON.stringify(outputsArray));
            // res.status(200).send("bźdong!!!");
        });
    });
});
export default getDataRouter;