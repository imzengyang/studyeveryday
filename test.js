
var MongoClient = require('mongodb').MongoClient
var assert = require('assert');
var url = 'mongodb://192.168.219.129:27017/node_club_test';

MongoClient.connect(url, function (err, db) {
    var collection = db.collection('documents');
    // Insert some documents 
    collection.insertMany([
        { a: 1 }, { a: 2 }, { a: 3 }
    ], function (err, result) {
        assert.equal(err, null);
        console.log(result.result)
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the document collection");
        
    });
    db.close();
})
