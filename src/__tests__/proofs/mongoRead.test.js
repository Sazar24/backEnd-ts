const assert = require('assert');
const mongo = require('mongodb').MongoClient;
const dbName = 'myproject';
const url = 'mongodb://localhost:27017/';
const ObjectID = require('mongodb').ObjectID;

// test('mongo should read collection...', () => {
//     let outputsArray = [];
//     console.log("/api/users/getall/ hit!");

//     mongo.connect(url, function (err, client) {
//         assert.equal(null, err);   // now its know its connected succesfully
//         // console.log("connect to mongo success");

//         const db = client.db(dbName);
//         const cursor = db.collection('users').find();   // znajdz wszystkie rekordy w tej kolekcji dla tej bazy z ktora sie polaczyles url`em

//         cursor.forEach(function (doc, err) { //  
//             assert.equal(null, err);  // sprawdz czy ok; If not - break! 
//             outputsArray.push(doc);   // każdy rekord z tej bazy odczytaj i wrzuc do roboczej tablicy
//         }, function () {
//             client.close();   // juz nie potrzebuje tej bazy. Zamknij ją.
//             // console.log("resultArray w foreachu:", outputsArray);
//         });
//     });
// }
// );

test('proof: testing finding single doc/record by chosen property', () => {
    
    mongo.connect(url, function (err, client) {
        const db = client.db(dbName);
        // const foundItem = db.collection('users').find({_id: "5ae968c6830e305daa113b49"});
        // console.log("foundItem: ", foundItem);
        const col = db.collection("users");
        // ObjectId("4ecc05e55dd98a436ddcc47c")
        // col.findOne({surname: "pociągowoZnowu"}, (err,doc)=>{
        // col.findOne({ _id: ObjectId }, (err, doc) => {
            // console.log('col: ', col);
            
        // col.findOne({ "surname": "pociągowoZnowu" }, (err, doc) => {
        col.findOne({ _id: ObjectID("5ae968ad830e305daa113b48") }, (err, doc) => {
            // test.equal(null, err);
            console.log('jestem w findOne!');
            console.log("found doc: ", doc);

            db.close();
        });

    });

    /////


});