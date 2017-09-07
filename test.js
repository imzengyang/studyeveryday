
// var MongoClient = require('mongodb').MongoClient
// var assert = require('assert');
// var url = 'mongodb://192.168.219.129:27017/node_club_test';

// MongoClient.connect(url, function (err, db) {
//     var collection = db.collection('documents');
//     // Insert some documents 
//     collection.insertMany([
//         { a: 1 }, { a: 2 }, { a: 3 }
//     ], function (err, result) {
//         assert.equal(err, null);
//         console.log(result.result)
//         assert.equal(3, result.result.n);
//         assert.equal(3, result.ops.length);
//         console.log("Inserted 3 documents into the document collection");

//     });
//     db.close();
// })


function http(url, method) {
    let promise = new Promise(function (resovle, reject) {
        setTimeout(function () {
            var data = 1
            if (data) {
                resovle(data);
            } else {
                reject("No Data");
            }
        }, 1000)
    })
    return promise;
}

// http("baidu.com", "get").then(function (successdata) {
//     console.log(successdata);
// }).catch(function (err) {
//     console.log(err)
// })

async function post(url,data){
    await new Promise(function(resovle,reject){
        let result =1
        if(result){
            resovle(resovle)
        }else{
            
            reject("Has Err")
        }
    })

}

let res =  post('sd',{name:"as"})
console.log(res)

async function TestHttp(){
    let result =  await http('baidu',"get");
    console.log(result)
}

TestHttp();
