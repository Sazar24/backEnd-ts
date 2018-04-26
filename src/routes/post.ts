import * as express from 'express';
const postDataRouter = express.Router();


postDataRouter.post('/', async (req, res) => {
    try {
        const token = req.body.token;

        res.status(200).send("router.post działa; Coś przyszło " + token)
        console.log(req);
    }
    catch (ex) {
        res.sendStatus(500);
        throw ex;
    }
});

export default postDataRouter;


/////////olds:
///// example: ///////
/////////////////
// app.post('/insert', function(req, res, next) {
//     var item = {
//       title: req.body.title,
//       content: req.body.content,
//       author: req.body.author
//     };

//     MongoClient.connect(url, function(err, db) {
//       assert.equal(null, err);
//       db.collection('user-data').insertOne(item, function(err, result) {
//         assert.equal(null, err);
//         console.log('Item inserted');
//         db.close();
//       });
//     });

//     res.redirect('/');
//   });

///// end of example ///////
////////////////////////////
///////
// test = require('assert');
// MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {
//   // Get the collection
//   var col = db.collection('insert_one');
//   col.insertOne({a:1}, function(err, r) {
//     test.equal(null, err);
//     test.equal(1, r.insertedCount);
//     // Finish up test
//     db.close();
//   });
// });
////


/////////////////
// app.post('/api/users/insert', (req: express.Request, res) => {
    // app.post('/api/users/insert', function(req, res, next)  {
    //     // const item = {
    //     //     title: req.body.title,
    //     //     content: req.body.content,
    //     //     author: req.body.author
    //     // }
    //     // console.log("received: ", item);
    //     MongoClient.connect(url, function(err:any,db:any){
    //         var col = db.collection('insert_one');
    //         col.insertOne({a:1}, function(err, r) {
    //             db.close();

    //         // assert.equal(null, err);
    //         // console.log("ok so far. Err is: ", err);

    //         // const db = client.db(dbName);
    //         // db('user-data').insertOne(item, function(err:any, result:any){
    //         //     assert.equal(null, err);
    //         //     console.log("Inserted item: ", item);
    //         //     db.close();
    //         })
    //     })

    //     // console.log("=================");
    //     // console.log("req.body", req.body);

    //     // console.log("-----------------");
    //     // console.log("req.headers", req.headers);
    //     // console.log("req.headers.dupa", req.headers["dupa"]);

    //     res.send("this is response from /api/users . Yuppi")
    // });