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
        var q = 'task_queue';
        var msg = process.argv.slice(2).join(' ') || "Hello World!";
        var msg = "Hello World!";

        ch.assertQueue(q, { durable: false });
        ch.sendToQueue(q, new Buffer(msg), { persistent: false });
        console.log(" [x] Sent '%s'", msg);

    });

});
