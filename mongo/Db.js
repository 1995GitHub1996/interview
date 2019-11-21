const {MongoClient} = require('mongodb');

// Connection URL
const url = 'mongodb://139.9.195.34:27000/test';
 
// Database Name
const dbName = 'test';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    console.log('Connected successfully to server');
    
    const db = client.db(dbName);

    db.collection('inventory').find({}).toArray(function(err, items) {
        console.log(items);
    });
    client.close();
});

// sfdf