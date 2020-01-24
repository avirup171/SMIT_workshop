'use strict';
let Message 				= require('azure-iot-device').Message;
let mqtt    				= require('mqtt');
const { EventHubClient } 	= require("@azure/event-hubs");

// Connection string - primary key of the Event Hubs namespace. 
// For example: Endpoint=sb://myeventhubns.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const connectionString = "Endpoint=sb://iothubrouter.servicebus.windows.net/;SharedAccessKeyName=sendKey;SharedAccessKey=lK4nt32VuA0BB1O58DRkbA4XPLAgAOaXr4kAbMGFAvg=;EntityPath=mqttrouter";

// Name of the event hub. For example: myeventhub
const eventHubsName = "mqttrouter";


var options = {
	port: 1883,
	clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
	username: 'swittonsdevice',
	password: 'swittonsprescriber360'
};

let client  = mqtt.connect('mqtt://devhub.swittons.com',options);
client.on('connect', function() { // When connected
	console.log("Connected to local MQTT");
});


//client.subscribe('p360/ibt/order');
//client.subscribe("$share/p360/swittons/order");
client.subscribe("swittons/order/test");


let device_id="",sak="",button_id="";


client.on('message', function (topic, payload) {
	// message is Buffer
	  console.log(payload.toString());
	console.log(topic);
	if(topic=== "swittons/order/test")
	{	
		let obj= JSON.parse(payload);
		device_id=obj.device_id;
		button_id=obj.button;
		console.log(device_id);
		pubData(obj);
	}
});

async function pubData(obj)
{
	const client = EventHubClient.createFromConnectionString(connectionString, eventHubsName);
	var eventData = JSON.stringify(obj);
	var sendData= {
		body: eventData
	}

	console.log("Sending data: \t"+JSON.stringify(obj));
	await client.send(sendData);
}

  pubData().catch(err => {
	console.log("Error occurred: ", err);
  });