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

    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed: false
    // }, (err, res)=>{
    //     if(err){
    //         console.log('Unable to inert entry to Todos collection - ' + err);
    //         return;
    //     }
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name:'Rohith',
    //     age:31,
    //     location:'Jacksonville, FL'
    // }, (err, res)=>{
    //     if(err){
    //         console.log('Unable to insert new User. Error - ' + err);
    //         return;
    //     }
    //     console.log('Successfully inserted New user - ' + JSON.stringify(res.ops, undefined, 2));
    //     console.log(res.ops[0]._id.getTimestamp());
    // });




    client.close();
});
