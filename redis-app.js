var redis = require('redis');
var client = redis.createClient('10.130.7.211','6379');

client.on('connect', function() {
    console.log('Redis client connected');
});

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});