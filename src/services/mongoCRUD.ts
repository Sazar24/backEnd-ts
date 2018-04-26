// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');


// const url = 'mongodb://localhost:27017';
// const dbName = 'myproject';



// class mongoCRUDserviceClass{   
//     saveOneRecord(){
//         let resultArray = [];
//         MongoClient.connect(url, function(err, db) {
//             assert.equal(null, err);   // now its know its connected succesfully
        
//             var cursor = db.collection('user-data').find();   // znajdz wszystkie rekordy w tej kolekcji dla tej bazy z ktora sie polaczyles url`em
        
//             cursor.forEach(function(doc, err) { //  
//               assert.equal(null, err);  // sprawdz czy ok; If not - break! 
//               resultArray.push(doc);   // każdy rekord z tej bazy odczytaj i wrzuc do roboczej tablicy
//             }, function() {
//               db.close();   // juz nie potrzebuje tej bazy. Zamknij ją.
        
//               res.render('index', {items: resultArray});  // odeslij odczytane dane do klienta.
//             });
//           });
//     }

//     getAllRecordsFromCollection(){

//     }
    
//     deleteDataById(){

//     }
// }

// const mongoCrudService = new mongoCRUDserviceClass();