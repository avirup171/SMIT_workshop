'use strict';

let mqtt= require('mqtt');

/*

Lets assume, we want to subscribe to a topic which will receive json data constituting of temperature and humidity

EXAMPLE: 

{
	"device_id": <DEVICE_ID>,
	"temperature": <TEMPERATURE_VALUE>,
	"humidity": <HUMIDITY>
}

*/

let client  = mqtt.connect('mqtt://broker.hivemq.com');
let sensorTopic="sennsor/data";

client.on('connect', function() { // When connected
	console.log("Connected to local MQTT");
	client.publish("smit/0987654321/status","Yes! I am online");
	//client.subscribe(sensorTopic);
});

//GENERATE RANDOM DATA

function pubData()
{
	let jsonData= {
		"device_id": "<DEVICE_ID>",
		"temperature": randomData(10,30),
		"humidity": randomData(50,90)
	}
	
	
	//var jsonobj=JSON.parse(jsonData);
	client.publish(sensorTopic,JSON.stringify(jsonData));
	console.log("Successfully published: \t"+JSON.stringify(jsonData));
}
setInterval(pubData, 1500)

function randomData(min, max) 
{  
	return Math.floor(Math.random() * (max - min + 1) + min)
}