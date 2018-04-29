const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

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
                    console.log("doc: ", doc);
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
    ////////////////////////////////////////
    ////////////////////////////////////////
    async readRecordOtherWay(filter) {
        let client;
        let obj;

        try {
            // Use connect method to connect to the Server
            client = await MongoClient.connect(url);

            const db = client.db(dbName);
            //end of example
            const col = db.collection('users');

            col.find({ "number": filter }).limit(1).next((err, doc) => {
                if (doc) {
                    assert.equal(null, err);
                    // Got a document
                    console.log("doc (retrieved other way): ", doc);
                    obj = doc;
                    // return doc;
                } else {
                    client.close();
                    return { "a": false };
                }
            });
            

        } catch (err) {
            console.log(err.stack);
        }

        if (client) {
            client.close();
            return obj;
        }
    }



    getAllRecordsFromCollection() {

    };

    deleteDataById() {

    };
}

const mongoCrudService = new mongoCRUDserviceClass();
export default mongoCrudService;


/////////////////////

// let resultArray = [];
// MongoClient.connect(url, function (err, db) {
//     assert.equal(null, err);   // now its know its connected succesfully

//     var cursor = db.collection('user-data').find();   // znajdz wszystkie rekordy w tej kolekcji dla tej bazy z ktora sie polaczyles url`em

//     cursor.forEach(function (doc: any, err: any) { //  
//         assert.equal(null, err);  // sprawdz czy ok; If not - break! 
//         resultArray.push(doc);   // każdy rekord z tej bazy odczytaj i wrzuc do roboczej tablicy
//     }, function () {
//         db.close();   // juz nie potrzebuje tej bazy. Zamknij ją.

//         res.render('index', { items: resultArray });  // odeslij odczytane dane do klienta.
//     });
// });
//     }