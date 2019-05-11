var amqp = require('amqplib/callback_api');


// amqp.connect('http://localhost:15672', function (err, conn) { 
amqp.connect('amqp://localhost', function (err, conn) { 

    if(err){
        console.log(err);
    } 
    conn.createChannel(function (err, ch) { 
        if(err){
            console.log(err);
        }
        let q = 'hello';
        ch.assertQueue(q, { durable: true });
        // Note: on Node 6 Buffer.from(msg) should be used
        ch.sendToQueue(q, new Buffer('Hello World!'), { persistent: true });
        console.log(" [x] Sent 'Hello World!'");

    });

});
