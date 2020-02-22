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
	client.subscribe(sensorTopic);
});



client.on('message', function (topic, payload) {
	// message is Buffer
	console.log(payload.toString());
	console.log(topic);
	if(topic=== "sensor/data")
	{
		try
		{
			//Parse JSON data
			let obj= JSON.parse(payload);
			console.log("Device ID: \t"+obj.device_id);
			console.log("Temperature: \t"+obj.temperature);
			console.log("Humidity: \t"+obj.device_id);
		}
		catch (e)
		{
			console.log("Some error occured");
		}	
		
	}
});
