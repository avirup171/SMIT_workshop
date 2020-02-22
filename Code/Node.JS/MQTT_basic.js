'use strict';

let mqtt= require('mqtt');
let topic= "smit/0987654321/status";

let client  = mqtt.connect('mqtt://broker.hivemq.com');

//CONNECT CALLBACK
client.on('connect', function() { // When connected
    console.log("Connected to MQTT");
    publish();
});

//PUBLISH
function publish()
{
    client.publish(topic,"Yes! I am online");
}

//SUBSCRIBE
client.on('message', function (topic, payload) {
	// message is Buffer
	console.log(payload.toString());
	console.log(topic);
});
