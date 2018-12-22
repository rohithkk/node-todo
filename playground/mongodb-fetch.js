const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'ToDoApp';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
    if(err){
        console.log('Unable to connect to DB - ' + err);
        return;
    }
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);

    // db.collection('Todos').find({completed:false}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch - ' + err);
    // });

    db.collection('Todos').find().count().then((count) => {
        console.log(`Total Todo items - ${count}`);
    }, (err) => {
        console.log(err);
    });

    //db.close();
});
